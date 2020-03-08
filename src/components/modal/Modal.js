import React, { cloneElement, useState, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';

import capitaliseString from '../utils/capitaliseString';

export const className = 'modal';

const Modal = ({ label, children, backgroundColour, enter }) => {

	const innerClass = `${className}__inner`;
	const innerStyleClass = backgroundColour ? `${innerClass} ${innerClass}--${backgroundColour}` : innerClass;
	const styleClass = enter ? `${className} ${className}--enter${capitaliseString(enter)}` : className;

	const [ modalIsClosing, setModalIsClosingState ] = useState(false);
	const onExitedCallback = useRef(null);

	const closeModal = callback => {

		onExitedCallback.current = callback;

		setModalIsClosingState(true);

	};

	return (

		<div className={styleClass}>

			<CSSTransition
				timeout={500}
				classNames={className}
				onExited={onExitedCallback.current}
				in={!modalIsClosing}
			>

				<div className={innerStyleClass}>

					<label className={`${className}__label`}>{label}</label>

					<div className={`${className}__content`}>

						{cloneElement(children, { closeModal })}

					</div>

				</div>

			</CSSTransition>

		</div>

	);

};

export default Modal;
