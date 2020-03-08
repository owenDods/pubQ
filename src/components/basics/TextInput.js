import React, { useState, useEffect, useRef } from 'react';

import Button from './Button';

export const className = 'textInput';

const TextInput = ({ onSubmit, value = '', placeholder, shouldFocusOnMount, withButton, buttonLabel, buttonDisabled }) => {

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

	const buttonContent = (

		<Button
			label={buttonLabel}
			disabled={buttonDisabled}
			onClick={handleSubmit}
		/>

	);

	return (

		<div className={className}>

			<input
				type="text"
				ref={textInput}
				onFocus={() => setEditingLocalValueStatus(true)}
				value={isEditingLocalValue ? localValue : value}
				onChange={({ target }) => setLocalValue(target.value)}
				placeholder={placeholder}
				onKeyPress={handleKeyPress}
			/>

			{withButton ? buttonContent : null}

		</div>

	);

};

export default TextInput;
