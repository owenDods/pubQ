import React from 'react';

import TextInput from '../textInput/TextInput';

export const className = 'teamManagerListItem';

const TeamManagerListItem = ({ index }) => (

	<div className={className}>

		<label>{index + 1}</label>

		<TextInput onChange={console.log} />

	</div>

);

export default TeamManagerListItem;
