import React from 'react';

import capitaliseString from '../utils/capitaliseString';

export const className = 'modal';

const Modal = ({ label, children, backgroundColour, enter }) => {

	let styleClass = backgroundColour ? `${className} ${className}--${backgroundColour}` : className;
	styleClass = enter ? `${styleClass} ${className}--enter${capitaliseString(enter)}` : styleClass;

	return (

		<div className={styleClass}>

			<label className={`${className}__label`}>{label}</label>

			<div className={`${className}__content`}>

				{children}

			</div>

		</div>

	);

};

export default Modal;
