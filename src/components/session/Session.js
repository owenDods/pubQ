import React, { useState } from 'react';
import {
	Switch,
	Route,
	useRouteMatch
} from 'react-router-dom';

import Modal from '../modal/Modal';
import TeamManager from '../teamManager/TeamManager';
import QuizManager from '../quizManager/QuizManager';
import QuizStart from '../quizStart/QuizStart';

export const className = 'session';

const QuizStartModal = () => (

	<Modal backgroundColour="blue" halfSize>

		<QuizStart />

	</Modal>

);

const QuizManagerModal = ({ selectedQuiz, setQuiz }) => (

	<Modal label="CHOOSE A QUIZ" backgroundColour="blue">

		<QuizManager selectedQuiz={selectedQuiz} setQuiz={setQuiz} />

	</Modal>

);

const TeamManagerModal = ({ teams, setTeams }) => (

	<Modal label="ADD TEAMS" backgroundColour="red" enter="bottom">

		<TeamManager teams={teams} setTeams={setTeams} />

	</Modal>

);

const Session = () => {

	const { path } = useRouteMatch();
	const [ teams, setTeams ] = useState([]);
	const [ selectedQuiz, setQuiz ] = useState(null);

	return (

		<div className={className}>

			<Switch>

				<Route path={`${path}/quizStart`}>

					<QuizStartModal />

				</Route>

				<Route path={`${path}/quizSelect`}>

					<QuizManagerModal selectedQuiz={selectedQuiz} setQuiz={setQuiz} />

				</Route>

				<Route path={path}>

					<TeamManagerModal teams={teams} setTeams={setTeams} />

				</Route>

			</Switch>

		</div>

	);

};

export default Session;
