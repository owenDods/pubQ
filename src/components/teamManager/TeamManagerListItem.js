import React from 'react';

import TextInput from '../textInput/TextInput';

export const className = 'teamManagerListItem';

const TeamManagerListItem = ({ index, setTeamName, name }) => {

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

		</div>

	);

};

export default TeamManagerListItem;
