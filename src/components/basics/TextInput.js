import React, { useState, useEffect, useRef } from 'react';

export const className = 'textInput';

const TextInput = ({ onSubmit, value = '', placeholder, shouldFocusOnMount }) => {

	const textInput = useRef(null);

	useEffect(() => {

		if (shouldFocusOnMount) {

			textInput.current.focus();

		}

	}, []);

	const [ isEditingLocalValue, setEditingLocalValueStatus ] = useState(false);
	const [ localValue, setLocalValue ] = useState(value);

	const handleSubmit = () => {

		if (value !== localValue) {

			onSubmit(localValue);

		}

		setLocalValue(value);

		setEditingLocalValueStatus(false);

	};

	useEffect(() => {

		setLocalValue(value);

	}, [ value ]);

	const handleKeyPress = ({ key }) => {

		if (key === 'Enter') {

			handleSubmit();

		}

	};

	return (

		<input
			className={className}
			type="text"
			ref={textInput}
			onFocus={() => setEditingLocalValueStatus(true)}
			value={isEditingLocalValue ? localValue : value}
			onChange={({ target }) => setLocalValue(target.value)}
			placeholder={placeholder}
			onKeyPress={handleKeyPress}
		/>

	);

};

export default TextInput;
