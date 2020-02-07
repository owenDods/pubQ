import React from 'react';

import List from '../list/List';
import TeamManagerListItem from './TeamManagerListItem';

export const className = 'teamManager';

const TeamManager = ({ teams = [] }) => (

	<div className={className}>

		<label className={`${className}__label`}>Add in teams</label>

		<List
			name={className}
			items={[ { name: null }, ...teams ]}
		>

			<TeamManagerListItem />

		</List>

	</div>

);

export default TeamManager;
