import React from 'react';

export const className = 'modal';

const Modal = ({ label, children, backgroundColour }) => {

	const styleClass = backgroundColour ? `${className} ${className}--${backgroundColour}` : className;

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
