import React, { cloneElement, useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';

import capitaliseString from '../utils/capitaliseString';

export const className = 'modal';

const Modal = ({ label, children, backgroundColour, enter, halfSize }) => {

	const [ initialEnter, setInitialEnterState ] = useState(false);
	useEffect(() => {

		setInitialEnterState(true);

	}, []);

	const onEnterCallback = useRef(null);
	const onModalEnter = callback => {

		onEnterCallback.current = callback;

	};

	const [ modalIsClosing, setModalIsClosingState ] = useState(false);
	const onExitedCallback = useRef(null);
	const closeModal = callback => {

		onExitedCallback.current = callback;

		setModalIsClosingState(true);

	};

	const labelContent = label ? (<label className={`${className}__label`}>{label}</label>) : null;

	const innerClass = `${className}__inner`;
	const innerStyleClass = backgroundColour ? `${innerClass} ${innerClass}--${backgroundColour}` : innerClass;
	let styleClass = enter ? `${className} ${className}--enter${capitaliseString(enter)}` : className;
	styleClass = halfSize ? `${styleClass} ${className}--halfSize` : styleClass;
	styleClass = label ? `${styleClass} ${className}--hasLabel` : styleClass;

	return (

		<div className={styleClass}>

			<CSSTransition
				timeout={500}
				classNames={className}
				onEntered={onEnterCallback.current}
				onExited={onExitedCallback.current}
				in={!initialEnter ? initialEnter : !modalIsClosing}
			>

				<div className={innerStyleClass}>

					{labelContent}

					<div className={`${className}__content`}>

						{cloneElement(children, { onModalEnter, closeModal })}

					</div>

				</div>

			</CSSTransition>

		</div>

	);

};

Modal.propTypes = {
	label: PropTypes.string,
	children: PropTypes.element,
	backgroundColour: PropTypes.string,
	enter: PropTypes.string,
	halfSize: PropTypes.bool
};

export default Modal;
