import React, { useState } from 'react';
import {
	Switch,
	Route,
	useRouteMatch
} from 'react-router-dom';

import TeamManagerModal from '../teamManager/TeamManagerModal';
import QuizManagerModal from '../quizManager/QuizManagerModal';
import QuizStart from '../quizStart/QuizStart';

export const className = 'session';

const Session = () => {

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

					<QuizManagerModal selectedQuizId={selectedQuizId} setQuiz={setQuiz} />

				</Route>

				<Route path={path}>

					<TeamManagerModal teams={teams} setTeams={setTeams} />

				</Route>

			</Switch>

		</div>

	);

};

export default Session;
