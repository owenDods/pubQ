import React, { useState, useEffect } from 'react';
import {
	Switch,
	Route,
	useRouteMatch,
	useLocation
} from 'react-router-dom';

import find from 'lodash/fp/find';

import quizzesJson from '../../quizzes.json';

import TeamManagerModal from '../teamManager/TeamManagerModal';
import QuizManagerModal from '../quizManager/QuizManagerModal';
import QuizStart from '../quizStart/QuizStart';
import QuestionManager from '../question/QuestionManager';

export const getSessionDestinations = path => ({
	TEAMS: `${path}/addTeams`,
	QUIZZES: `${path}/quizSelect`,
	START: `${path}/quizStart`,
	QUESTIONS: `${path}/question`
});
export const defaultQuizLocation = { currentRound: 0, currentQuestion: 0 };
export const className = 'session';

const Session = () => {

	const [ quizzes, setQuizzes ] = useState([]);
	useEffect(() => {

		new Promise(res => res(quizzesJson))
			.then(data => setQuizzes(data));

	}, []);

	const [ teams, setTeams ] = useState([]);
	const [ selectedQuizId, setQuiz ] = useState(null);
	const fullQuiz = find({ id: selectedQuizId }, quizzes) || {};
	const { name: quizName, img: quizImg } = fullQuiz;

	const { path } = useRouteMatch();
	const [ sessionDestinations ] = useState(getSessionDestinations(path));
	const [ destinationFromTeams, setDestinationFromTeams ] = useState(sessionDestinations.QUIZZES);
	useEffect(() => {

		if (selectedQuizId) {

			setDestinationFromTeams(sessionDestinations.START);

		} else {

			setDestinationFromTeams(sessionDestinations.QUIZZES);

		}

	}, [ selectedQuizId ]);
	const [ destinationFromQuizzes, setDestinationFromQuizzes ] = useState(sessionDestinations.START);
	useEffect(() => {

		if (teams.length) {

			setDestinationFromQuizzes(sessionDestinations.START);

		} else {

			setDestinationFromQuizzes(sessionDestinations.TEAMS);

		}

	}, [ teams.length ]);

	const teamManagerModal = (

		<TeamManagerModal
			teams={teams}
			setTeams={setTeams}
			destinationFromTeams={destinationFromTeams}
		/>

	);

	const { pathname } = useLocation();
	const quizInSession = pathname === sessionDestinations.QUESTIONS;

	const [ quizLocationStatus, setQuizLocationStatus ] = useState(defaultQuizLocation);

	const styleClass = quizInSession ? `${className} ${className}--inSession` : className;

	return (

		<div className={styleClass}>

			<Switch>

				<Route path={sessionDestinations.START}>

					<QuizStart
						quizName={quizName}
						quizImg={quizImg}
						teams={teams}
						quizSelectionRoute={sessionDestinations.QUIZZES}
						teamSelectionRoute={sessionDestinations.TEAMS}
						questionSelectionRoute={sessionDestinations.QUESTIONS}
					/>

				</Route>

				<Route path={sessionDestinations.QUIZZES}>

					<QuizManagerModal
						selectedQuizId={selectedQuizId}
						setQuiz={setQuiz}
						quizzes={quizzes}
						destinationFromQuizzes={destinationFromQuizzes}
					/>

				</Route>

				<Route path={sessionDestinations.TEAMS}>

					{teamManagerModal}

				</Route>

				<Route path={sessionDestinations.QUESTIONS}>

					<QuestionManager
						fullQuiz={fullQuiz.id ? fullQuiz : quizzes[0]}
						quizLocationStatus={quizLocationStatus}
						setQuizLocationStatus={setQuizLocationStatus}
						teams={teams}
					/>

				</Route>

				<Route path={path}>

					{teamManagerModal}

				</Route>

			</Switch>

		</div>

	);

};

export default Session;
