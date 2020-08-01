import React from 'react';
import PropTypes from 'prop-types';

export const className = 'button';

const Button = ({ label, onClick, disabled, disabledText, children }) => (

	<button
		type="button"
		className={className}
		onClick={onClick}
		disabled={disabled}
	>

		<span>{disabled && disabledText ? disabledText : label}</span>

		{children}

	</button>

);

Button.propTypes = {
	label: PropTypes.string,
	onClick: PropTypes.func,
	disabled: PropTypes.bool,
	disabledText: PropTypes.string,
	children: PropTypes.element
};

export default Button;
