import React from 'react';
import PropTypes from 'prop-types';

import TextFitParagraph from '../textFitParagraph/TextFitParagraph';

export const className = 'questionGalleryAnswersDisplayItem';

const QuestionGalleryAnswersDisplayItem = ({ text, answerRevealed, correctAnswer }) => {

	const shouldHighlightThisAnswer = answerRevealed && text === correctAnswer;
	const styleClass = shouldHighlightThisAnswer ? `${className} ${className}--isCorrect` : className;

	return (

		<div className={styleClass}>

			<TextFitParagraph text={text} />

		</div>

	);

};

QuestionGalleryAnswersDisplayItem.propTypes = {
	text: PropTypes.string,
	answerRevealed: PropTypes.bool,
	correctAnswer: PropTypes.string
};

export default QuestionGalleryAnswersDisplayItem;
