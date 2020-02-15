import React, { useState } from 'react';
import {
	Switch,
	Route,
	useRouteMatch
} from 'react-router-dom';

import TeamManager from '../teamManager/TeamManager';
import QuizManager from '../quizManager/QuizManager';

export const className = 'session';

const Session = () => {

	const match = useRouteMatch();
	const [ teams, setTeams ] = useState([]);

	return (

		<div className={className}>

			<Switch>

				<Route path={`${match.path}/quizSelect`}>

					<QuizManager />

				</Route>

				<Route path={match.path}>

					<TeamManager teams={teams} setTeams={setTeams} />

				</Route>

			</Switch>

		</div>

	);

};

export default Session;
