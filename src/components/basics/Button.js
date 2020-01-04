import React from 'react';

export const className = 'button';

const Button = ({ label, onClick }) => (

	<button type="button" className={className} onClick={onClick}>

		<span>{label}</span>

	</button>

);

export default Button;
