import React from 'react';
import PropTypes from 'prop-types';

export const className = 'quizStartQuizDisplay';

const QuizStartQuizDisplay = ({ quizName }) => (

	<div className={className}>

		<h2>{quizName}</h2>

	</div>

);

QuizStartQuizDisplay.propTypes = {
	quizName: PropTypes.string
};

export default QuizStartQuizDisplay;
