import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import QuizIcon from '../quizIcon/QuizIcon';

export const className = 'quizStartQuizDisplay';

const QuizStartQuizDisplay = ({ quizName, quizImg, quizSelectionRoute }) => {

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

	const noQuizSelectedContent = !quizName ? (

		<Link to={quizSelectionRoute}>

			Go to Quiz Selection

		</Link>

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
	quizSelectionRoute: PropTypes.string
};

export default QuizStartQuizDisplay;
