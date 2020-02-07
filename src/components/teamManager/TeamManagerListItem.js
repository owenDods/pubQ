import React from 'react';

import TextInput from '../basics/TextInput';
import Button from '../basics/Button';

export const className = 'teamManagerListItem';

const TeamManagerListItem = ({ index, setTeamName, name, removeTeam }) => {

	const teamNumber = index + 1;
	const teamNotCreatedYet = !name;

	const handleSubmit = val => {

		if (val) {

			setTeamName(teamNumber, val);

		}

	};

	return (

		<div className={className}>

			<label className={`${className}__label`}>

				<span>{teamNotCreatedYet ? '...' : teamNumber}</span>

			</label>

			<TextInput
				onSubmit={handleSubmit}
				value={name}
				placeholder="Enter team name"
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
