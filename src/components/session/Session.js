import React, { useState, useEffect } from 'react';
import {
	Switch,
	Route,
	useRouteMatch
} from 'react-router-dom';

import find from 'lodash/fp/find';

import quizzesJson from '../../quizzes.json';

import TeamManagerModal from '../teamManager/TeamManagerModal';
import QuizManagerModal from '../quizManager/QuizManagerModal';
import QuizStart from '../quizStart/QuizStart';

export const getSessionDestinations = path => ({
	TEAMS: `${path}/addTeams`,
	QUIZZES: `${path}/quizSelect`,
	START: `${path}/quizStart`
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
	const { name: quizName, img: quizImg } = find({ id: selectedQuizId }, quizzes) || {};

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

	return (

		<div className={className}>

			<Switch>

				<Route path={sessionDestinations.START}>

					<QuizStart
						quizName={quizName}
						quizImg={quizImg}
						teams={teams}
						quizSelectionRoute={sessionDestinations.QUIZZES}
						teamSelectionRoute={sessionDestinations.TEAMS}
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

				<Route path={path}>

					{teamManagerModal}

				</Route>

			</Switch>

		</div>

	);

};

export default Session;
