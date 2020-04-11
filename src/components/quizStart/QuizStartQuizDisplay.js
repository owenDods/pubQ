import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import QuizIcon from '../quizIcon/QuizIcon';
import NavLink from '../basics/NavLink';

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

		<NavLink to={quizSelectionRoute}>

			Go to Quiz Selection

		</NavLink>

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
