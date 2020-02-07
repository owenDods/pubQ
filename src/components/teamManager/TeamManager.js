import React from 'react';

import find from 'lodash/fp/find';
import map from 'lodash/fp/map';

import editOrAddNewItem from '../utils/editOrAddNewItem';

import List from '../basics/List';
import TeamManagerListItem from './TeamManagerListItem';
import Button from '../basics/Button';

export const className = 'teamManager';

const TeamManager = ({ teams = [], setTeams }) => {

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

	return (

		<div className={className}>

			<label className={`${className}__label`}>ADD TEAMS</label>

			<List
				name={className}
				items={[ ...teams, { name: '' } ]}
			>

				<TeamManagerListItem setTeamName={setTeamName} removeTeam={removeTeam} />

			</List>

			<Button
				label={`Start ${teams.length} team game`}
				disabled={!teams.length}
				disabledText="Add at least one team"
			/>

		</div>

	);

};

export default TeamManager;
