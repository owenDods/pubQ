import React, { useState, useEffect } from 'react';
import {
	Switch,
	Route,
	useRouteMatch,
	useLocation,
	matchPath
} from 'react-router-dom';

import find from 'lodash/fp/find';

import quizzesJson from '../../quizzes.json';

import TeamManagerModal from '../teamManager/TeamManagerModal';
import QuizManagerModal from '../quizManager/QuizManagerModal';
import QuizStart from '../quizStart/QuizStart';
import QuestionManager from '../questionManager/QuestionManager';

export const getSessionDestinations = path => ({
	TEAMS: `${path}/addTeams`,
	QUIZZES: `${path}/quizSelect`,
	START: `${path}/quizStart`,
	QUESTIONS: `${path}/question`
});
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

	const { pathname } = useLocation();
	const quizInSession = new RegExp(`^(${sessionDestinations.QUESTIONS})`).test(pathname);

	const questionsRoutePath = `${sessionDestinations.QUESTIONS}/:roundIndex/:questionIndex`;
	const {
		params: { roundIndex, questionIndex }
	} = matchPath(pathname, { path: questionsRoutePath });

	const styleClass = quizInSession ? `${className} ${className}--inSession` : className;

	return (

		<div className={styleClass}>

			<div className={`${className}__inner`}>

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

						<TeamManagerModal
							teams={teams}
							setTeams={setTeams}
							destinationFromTeams={destinationFromTeams}
						/>

					</Route>

					<Route path={questionsRoutePath}>

						<QuestionManager
							fullQuiz={fullQuiz.id ? fullQuiz : quizzes[0]}
							roundIndex={roundIndex}
							questionIndex={questionIndex}
							teams={teams}
						/>

					</Route>

				</Switch>

			</div>

		</div>

	);

};

export default Session;
