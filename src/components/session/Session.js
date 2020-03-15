import React, { useState, useEffect } from 'react';
import {
	Switch,
	Route,
	useRouteMatch
} from 'react-router-dom';

import quizzesJson from '../../quizzes.json';

import TeamManagerModal from '../teamManager/TeamManagerModal';
import QuizManagerModal from '../quizManager/QuizManagerModal';
import QuizStart from '../quizStart/QuizStart';

export const className = 'session';

const Session = () => {

	const [ quizzes, setQuizzes ] = useState([]);
	useEffect(() => {

		new Promise(res => res(quizzesJson))
			.then(data => setQuizzes(data));

	}, []);

	const { path } = useRouteMatch();
	const [ teams, setTeams ] = useState([]);
	const [ selectedQuizId, setQuiz ] = useState(null);

	return (

		<div className={className}>

			<Switch>

				<Route path={`${path}/quizStart`}>

					<QuizStart />

				</Route>

				<Route path={`${path}/quizSelect`}>

					<QuizManagerModal
						selectedQuizId={selectedQuizId}
						setQuiz={setQuiz}
						quizzes={quizzes}
					/>

				</Route>

				<Route path={path}>

					<TeamManagerModal teams={teams} setTeams={setTeams} />

				</Route>

			</Switch>

		</div>

	);

};

export default Session;
