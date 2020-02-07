import React from 'react';

import TextInput from '../textInput/TextInput';

export const className = 'teamManagerListItem';

const TeamManagerListItem = ({ index, setTeamName }) => {

	const teamNumber = index + 1;

	return (

		<div className={className}>

			<label>{teamNumber}</label>

			<TextInput onChange={val => setTeamName(teamNumber, val)} />

		</div>

	);

};

export default TeamManagerListItem;
