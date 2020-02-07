import React from 'react';

import find from 'lodash/fp/find';

import editOrAddNewItem from '../utils/editOrAddNewItem';

import List from '../list/List';
import TeamManagerListItem from './TeamManagerListItem';

export const className = 'teamManager';

const TeamManager = ({ teams = [], setTeams }) => {

	const setTeamName = (teamNumber, teamName) => {

		const teamToEditOrAdd = find({ number: teamNumber }, teams) || { number: teamNumber };

		teamToEditOrAdd.name = teamName;

		const newTeams = editOrAddNewItem(teams, teamToEditOrAdd, 'number');

		setTeams(newTeams);

	};

	return (

		<div className={className}>

			<label className={`${className}__label`}>Add in teams</label>

			<List
				name={className}
				items={[ ...teams, { name: null } ]}
			>

				<TeamManagerListItem setTeamName={setTeamName} />

			</List>

		</div>

	);

};

export default TeamManager;
