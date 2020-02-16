import React, { cloneElement, useState } from 'react';
import {
	TransitionGroup,
	CSSTransition
} from 'react-transition-group';

import capitaliseString from '../utils/capitaliseString';

export const className = 'modal';

const Modal = ({ label, children, backgroundColour, enter }) => {

	const innerClass = `${className}__inner`;
	const innerStyleClass = backgroundColour ? `${innerClass} ${innerClass}--${backgroundColour}` : innerClass;
	const styleClass = enter ? `${className} ${className}--enter${capitaliseString(enter)}` : className;

	const [ modalIsClosing, closeModal ] = useState(false);

	const modalContent = (

		<CSSTransition
			timeout={500}
			classNames={className}
		>

			<div className={innerStyleClass}>

				<label className={`${className}__label`}>{label}</label>

				<div className={`${className}__content`}>

					{cloneElement(children, { closeModal: () => closeModal(true) })}

				</div>

			</div>

		</CSSTransition>

	);

	return (

		<TransitionGroup className={styleClass}>

			{modalIsClosing ? null : modalContent}

		</TransitionGroup>

	);

};

export default Modal;
