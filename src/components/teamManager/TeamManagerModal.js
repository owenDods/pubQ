import React from 'react';

import Modal from '../modal/Modal';
import TeamManager from '../teamManager/TeamManager';

const TeamManagerModal = ({ teams, setTeams }) => (

	<Modal label="ADD TEAMS" backgroundColour="red" enter="bottom">

		<TeamManager teams={teams} setTeams={setTeams} />

	</Modal>

);

export default TeamManagerModal;
