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

	const styleClass = teamNotCreatedYet ? className : `${className} ${className}--completed`;

	return (

		<div className={styleClass}>

			<label className={`${className}__label`}>

				<span>{teamNotCreatedYet ? '...' : teamNumber}</span>

			</label>

			<TextInput
				onSubmit={handleSubmit}
				value={name}
				placeholder="Enter team name"
				shouldFocusOnMount
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
