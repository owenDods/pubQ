import React from 'react';

export const className = 'textInput';

const TextInput = ({ onChange }) => (

	<input
		className={className}
		type="text"
		onChange={({ target }) => onChange(target.value)}
	/>

);

export default TextInput;
