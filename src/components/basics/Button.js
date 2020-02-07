import React from 'react';

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

export default Button;
