import React from 'react';

import TextInput from '../basics/TextInput';
import Button from '../basics/Button';

export const className = 'teamManagerListItem';

const TeamManagerListItem = ({ index, setTeamName, name, removeTeam }) => {

	const teamNumber = index + 1;
	const teamNotCreatedYet = !name;

	return (

		<div className={className}>

			<label className={`${className}__label`}>

				<span>{teamNotCreatedYet ? '...' : teamNumber}</span>

			</label>

			<TextInput
				onSubmit={val => setTeamName(teamNumber, val)}
				value={name}
			/>

			<Button
				label="X"
				onClick={() => removeTeam(teamNumber)}
				disabled={teamNotCreatedYet}
			/>

		</div>

	);

};

export default TeamManagerListItem;
