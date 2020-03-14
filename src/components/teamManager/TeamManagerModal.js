import React from 'react';
import PropTypes from 'prop-types';

import Modal from '../modal/Modal';
import TeamManager from './TeamManager';

const TeamManagerModal = ({ teams, setTeams }) => (

	<Modal label="ADD TEAMS" backgroundColour="red" enter="bottom">

		<TeamManager teams={teams} setTeams={setTeams} />

	</Modal>

);

TeamManagerModal.propTypes = {
	teams: PropTypes.arrayOf(PropTypes.shape({
		number: PropTypes.number.isRequired,
		name: PropTypes.string
	})),
	setTeams: PropTypes.func
};

export default TeamManagerModal;
