import React from 'react';
import PropTypes from 'prop-types';

export const className = 'questionGalleryAnswersDisplayItem';

const QuestionGalleryAnswersDisplayItem = ({ text, answerRevealed, correctAnswer }) => {

	const shouldHighlightThisAnswer = answerRevealed && text === correctAnswer;
	const styleClass = shouldHighlightThisAnswer ? `${className} ${className}--isCorrect` : className;

	return (

		<div className={styleClass}>

			<label>{text}</label>

		</div>

	);

};

QuestionGalleryAnswersDisplayItem.propTypes = {
	text: PropTypes.string,
	answerRevealed: PropTypes.bool,
	correctAnswer: PropTypes.string
};

export default QuestionGalleryAnswersDisplayItem;
