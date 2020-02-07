import React from 'react';

import TextInput from '../basics/TextInput';
import Button from '../basics/Button';

export const className = 'teamManagerListItem';

const TeamManagerListItem = ({ index, setTeamName, name, removeTeam }) => {

	const teamNumber = index + 1;

	return (

		<div className={className}>

			<label className={`${className}__label`}>

				<span>{teamNumber}</span>

			</label>

			<TextInput
				onSubmit={val => setTeamName(teamNumber, val)}
				value={name}
			/>

			<Button
				label="X"
				onClick={() => removeTeam(teamNumber)}
				disabled={!name}
			/>

		</div>

	);

};

export default TeamManagerListItem;
