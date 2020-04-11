import React from 'react';
import PropTypes from 'prop-types';

import Modal from '../modal/Modal';
import TeamManager from './TeamManager';

const TeamManagerModal = ({ teams, setTeams, destinationFromTeams }) => (

	<Modal label="ADD TEAMS" backgroundColour="red" enter="bottom">

		<TeamManager
			teams={teams}
			setTeams={setTeams}
			destinationFromTeams={destinationFromTeams}
		/>

	</Modal>

);

TeamManagerModal.propTypes = {
	teams: PropTypes.arrayOf(PropTypes.shape({
		number: PropTypes.number.isRequired,
		name: PropTypes.string
	})),
	setTeams: PropTypes.func,
	destinationFromTeams: PropTypes.string
};

export default TeamManagerModal;
