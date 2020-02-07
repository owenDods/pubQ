import React, { useState } from 'react';

import TeamManager from '../teamManager/TeamManager';
import QuizManager from '../quizManager/QuizManager';

export const className = 'session';

const Session = () => {

	const [ teams, setTeams ] = useState([]);

	return (

		<div className={className}>

			<QuizManager />

			<TeamManager teams={teams} setTeams={setTeams} />

		</div>

	);

};

export default Session;
