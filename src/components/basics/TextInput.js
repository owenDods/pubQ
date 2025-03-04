import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

import Button from './Button';

export const className = 'textInput';

const TextInput = ({ onSubmit, value = '', placeholder, shouldFocusOnMount, withButton, buttonLabel, triggerFocus }) => {

	const textInput = useRef(null);

	useEffect(() => {

		if (shouldFocusOnMount) {

			textInput.current.focus();

		}

	}, []);
	useEffect(() => {

		if (triggerFocus) {

			textInput.current.focus();

		}

	}, [ triggerFocus ]);

	const [ isEditingLocalValue, setEditingLocalValueStatus ] = useState(false);
	const [ localValue, setLocalValue ] = useState(value);
	const localValueIsDifferent = value !== localValue;

	const handleSubmit = () => {

		if (localValueIsDifferent) {

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
			onClick={handleSubmit}
			disabled={!localValueIsDifferent}
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

TextInput.propTypes = {
	onSubmit: PropTypes.func.isRequired,
	value: PropTypes.string,
	placeholder: PropTypes.string,
	shouldFocusOnMount: PropTypes.bool,
	withButton: PropTypes.bool,
	buttonLabel: PropTypes.string,
	triggerFocus: PropTypes.bool
};

export default TextInput;
