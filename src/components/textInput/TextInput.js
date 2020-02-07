import React, { useState } from 'react';

export const className = 'textInput';

const TextInput = ({ onSubmit, value = '' }) => {

	const [ hasFocus, setFocus ] = useState(false);
	const [ localValue, setLocalValue ] = useState(value);

	const handleBlur = () => {

		onSubmit(localValue);

		setFocus(false);

	};

	return (

		<input
			className={className}
			type="text"
			onFocus={() => setFocus(true)}
			onBlur={handleBlur}
			value={hasFocus ? localValue : value}
			onChange={({ target }) => setLocalValue(target.value)}
		/>

	);

};

export default TextInput;
