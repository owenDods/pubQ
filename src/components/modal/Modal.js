import React, { cloneElement, useState, useEffect, useRef } from 'react';
import {
	TransitionGroup,
	CSSTransition
} from 'react-transition-group';
import defer from 'lodash/fp/defer';

import capitaliseString from '../utils/capitaliseString';

export const className = 'modal';

const Modal = ({ label, children, backgroundColour, enter }) => {

	const innerClass = `${className}__inner`;
	const innerStyleClass = backgroundColour ? `${innerClass} ${innerClass}--${backgroundColour}` : innerClass;
	const styleClass = enter ? `${className} ${className}--enter${capitaliseString(enter)}` : className;

	const [ modalIsClosing, setModalIsClosingState ] = useState(false);
	const onExitedCallback = useRef(null);

	const closeModal = callback => {

		console.log('closeModal CALLED', callback);

		onExitedCallback.current = callback;

		defer(() => {

			console.log('setModalIsClosingState');

			setModalIsClosingState(true);

		});

	};

	console.log(onExitedCallback);

	const modalContent = (

		<CSSTransition
			timeout={500}
			classNames={className}
			onExited={onExitedCallback.current}
		>

			<div className={innerStyleClass}>

				<label className={`${className}__label`}>{label}</label>

				<div className={`${className}__content`}>

					{cloneElement(children, { closeModal })}

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
