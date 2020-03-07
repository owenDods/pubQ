import React, { useState } from 'react';
import {
	Switch,
	Route,
	useRouteMatch
} from 'react-router-dom';

import Modal from '../modal/Modal';
import TeamManager from '../teamManager/TeamManager';
import QuizManager from '../quizManager/QuizManager';

export const className = 'session';

const Session = () => {

	const { path } = useRouteMatch();
	const [ teams, setTeams ] = useState([]);

	return (

		<div className={className}>

			<Switch>

				<Route path={`${path}/quizSelect`}>

					<Modal label="CHOOSE A QUIZ" backgroundColour="blue">

						<QuizManager />

					</Modal>

				</Route>

				<Route path={path}>

					<Modal label="ADD TEAMS" backgroundColour="red" enter="bottom">

						<TeamManager teams={teams} setTeams={setTeams} />

					</Modal>

				</Route>

			</Switch>

		</div>

	);

};

export default Session;
