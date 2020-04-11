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

	const { path } = useRouteMatch();
	const [ sessionDestinations ] = useState(getSessionDestinations(path));

	const [ quizzes, setQuizzes ] = useState([]);
	useEffect(() => {

		new Promise(res => res(quizzesJson))
			.then(data => setQuizzes(data));

	}, []);

	const [ teams, setTeams ] = useState([]);
	const [ selectedQuizId, setQuiz ] = useState(null);
	const { name: quizName, img: quizImg } = find({ id: selectedQuizId }, quizzes) || {};

	return (

		<div className={className}>

			<Switch>

				<Route path={sessionDestinations.START}>

					<QuizStart
						quizName={quizName}
						quizImg={quizImg}
						teams={teams}
						quizSelectionRoute={sessionDestinations.QUIZZES}
					/>

				</Route>

				<Route path={sessionDestinations.QUIZZES}>

					<QuizManagerModal
						selectedQuizId={selectedQuizId}
						setQuiz={setQuiz}
						quizzes={quizzes}
					/>

				</Route>

				<Route path={sessionDestinations.TEAMS}>

					<TeamManagerModal teams={teams} setTeams={setTeams} />

				</Route>

				<Route path={path}>

					<TeamManagerModal teams={teams} setTeams={setTeams} />

				</Route>

			</Switch>

		</div>

	);

};

export default Session;
