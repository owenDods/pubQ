import React from 'react';
import PropTypes from 'prop-types';

export const className = 'button';

const Button = ({ label, onClick, disabled, disabledText }) => (

	<button
		type="button"
		className={className}
		onClick={onClick}
		disabled={disabled}
	>

		<span>{disabled && disabledText ? disabledText : label}</span>

	</button>

);

Button.propTypes = {
	label: PropTypes.string,
	onClick: PropTypes.func,
	disabled: PropTypes.bool,
	disabledText: PropTypes.string
};

export default Button;
