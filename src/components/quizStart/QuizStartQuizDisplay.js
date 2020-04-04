import React from 'react';
import PropTypes from 'prop-types';

import QuizIcon from '../quizIcon/QuizIcon';

export const className = 'quizStartQuizDisplay';

const QuizStartQuizDisplay = ({ quizName, quizImg }) => {

	const imgBackgroundStyle = quizImg ? {
		backgroundImage: `url(${quizImg})`
	} : {};

	const styleClass = quizImg ? `${className} ${className}--hasImg` : className;

	return (

		<div className={styleClass}>

			<div className={`${className}__img`} style={imgBackgroundStyle}>

				<QuizIcon />

			</div>

			<h2>{quizName}</h2>

		</div>

	);

};

QuizStartQuizDisplay.propTypes = {
	quizName: PropTypes.string,
	quizImg: PropTypes.string
};

export default QuizStartQuizDisplay;
