import React, { useState, useEffect, useRef } from 'react';

export const className = 'textInput';

const TextInput = ({ onSubmit, value = '', placeholder, shouldFocusOnMount }) => {

	const textInput = useRef(null);

	useEffect(() => {

		if (shouldFocusOnMount) {

			textInput.current.focus();

		}

	}, []);

	const [ hasFocus, setFocus ] = useState(false);
	const [ localValue, setLocalValue ] = useState(value);

	const handleBlur = () => {

		if (value !== localValue) {

			onSubmit(localValue);

		}

		setLocalValue(value);

		setFocus(false);

	};

	useEffect(() => {

		setLocalValue(value);

	}, [ value ]);

	return (

		<input
			className={className}
			type="text"
			ref={textInput}
			onFocus={() => setFocus(true)}
			onBlur={handleBlur}
			value={hasFocus ? localValue : value}
			onChange={({ target }) => setLocalValue(target.value)}
			placeholder={placeholder}
		/>

	);

};

export default TextInput;
