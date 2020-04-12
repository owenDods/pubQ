import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';

import QuizIcon from '../quizIcon/QuizIcon';
import Button from '../basics/Button';

export const className = 'quizStartQuizDisplay';

const QuizStartQuizDisplay = props => {

	const {
		quizName,
		quizImg,
		quizSelectionRoute,
		closeModal,
		intendedRedirectDestination,
		setIntendedRedirectDestination,
		setRedirectDestination
	} = props;

	const imgBackgroundStyle = quizImg ? {
		backgroundImage: `url(${quizImg})`
	} : {};

	const defaultContent = quizName ? (

		<Fragment>

			<div className={`${className}__img`} style={imgBackgroundStyle}>

				<QuizIcon />

			</div>

			<h2>{quizName}</h2>

		</Fragment>

	) : null;

	useEffect(() => {

		if (intendedRedirectDestination) {

			let closeModalCallback;

			if (intendedRedirectDestination === quizSelectionRoute) {

				closeModalCallback = () => setRedirectDestination(intendedRedirectDestination);

			}

			closeModal(closeModalCallback);

		}

	}, [ intendedRedirectDestination ]);
	const noQuizSelectedContent = !quizName ? (

		<Button
			label="Go to Quiz Selection"
			onClick={() => setIntendedRedirectDestination(quizSelectionRoute)}
		/>

	) : null;

	const styleClass = quizImg ? `${className} ${className}--hasImg` : className;

	return (

		<div className={styleClass}>

			{defaultContent}

			{noQuizSelectedContent}

		</div>

	);

};

QuizStartQuizDisplay.propTypes = {
	quizName: PropTypes.string,
	quizImg: PropTypes.string,
	quizSelectionRoute: PropTypes.string,
	closeModal: PropTypes.func,
	intendedRedirectDestination: PropTypes.string,
	setIntendedRedirectDestination: PropTypes.func.isRequired,
	setRedirectDestination: PropTypes.func.isRequired
};

export default QuizStartQuizDisplay;
