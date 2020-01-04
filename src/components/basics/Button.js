import React from 'react';

export const className = 'button';

const Button = ({ label }) => (

	<button type="button" className={className}>

		<span>{label}</span>

	</button>

);

export default Button;
