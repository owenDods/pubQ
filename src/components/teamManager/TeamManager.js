import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

import find from 'lodash/fp/find';
import map from 'lodash/fp/map';

import editOrAddNewItem from '../utils/editOrAddNewItem';

import List from '../basics/List';
import TeamManagerListItem from './TeamManagerListItem';
import Button from '../basics/Button';

export const teamLimit = 8;
export const className = 'teamManager';

const TeamManager = ({ teams = [], setTeams, closeModal, destinationFromTeams }) => {

	const setTeamName = (teamNumber, teamName) => {

		const teamToEditOrAdd = find({ number: teamNumber }, teams) || { number: teamNumber };

		teamToEditOrAdd.name = teamName;

		const newTeams = editOrAddNewItem(teams, teamToEditOrAdd, 'number');

		setTeams(newTeams);

	};
	const removeTeam = teamNumber => {

		const teamIndex = teamNumber - 1;
		const teamsBeforeNumber = teams.slice(0, teamIndex);
		const teamsAfterNumber = teams.slice(teamNumber);
		const teamsAfterNumberWithUpdatedNumbers = map(team => ({
			...team,
			number: team.number - 1
		}), teamsAfterNumber);

		const newTeams = [
			...teamsBeforeNumber,
			...teamsAfterNumberWithUpdatedNumbers
		];

		setTeams(newTeams);

	};

	const [ teamsConfirmed, setTeamConfirmedStatus ] = useState(false);

	if (teamsConfirmed) {

		return (<Redirect push to={destinationFromTeams} />);

	}

	const teamItems = teams.length < teamLimit ? [ ...teams, { name: '' } ] : teams;

	return (

		<div className={className}>

			<List
				name={className}
				items={teamItems}
			>

				<TeamManagerListItem setTeamName={setTeamName} removeTeam={removeTeam} />

			</List>

			<Button
				label={`Start ${teams.length} team game`}
				disabled={!teams.length}
				disabledText="Add at least one team"
				onClick={() => closeModal(() => setTeamConfirmedStatus(true))}
			/>

		</div>

	);

};

TeamManager.propTypes = {
	teams: PropTypes.arrayOf(PropTypes.shape({
		number: PropTypes.number.isRequired,
		name: PropTypes.string
	})),
	setTeams: PropTypes.func.isRequired,
	closeModal: PropTypes.func,
	destinationFromTeams: PropTypes.string
};

export default TeamManager;
