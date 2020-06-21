import React from 'react';
import PropTypes from 'prop-types';

import get from 'lodash/fp/get';

import { multipleChoiceQuestionShape } from '../shapes/quizShape';

import TextFitParagraph from '../textFitParagraph/TextFitParagraph';
import QuestionGalleryAnswersDisplay from './QuestionGalleryAnswersDisplay';

export const className = 'questionGalleryItem';

const QuestionGalleryItem = ({ currentRoundIndex, currentQuestionIndex, currentQuestion }) => {

	const content = get('content', currentQuestion);
	const questionText = get('question', content);
	const answers = get('answers', content);

	return (

		<div className={className}>

			<div className={`${className}__questionText`}>

				<TextFitParagraph text={questionText} />

			</div>

			<QuestionGalleryAnswersDisplay
				currentRoundIndex={currentRoundIndex}
				currentQuestionIndex={currentQuestionIndex}
				answers={answers}
			/>

		</div>

	);

};

QuestionGalleryItem.propTypes = {
	currentRoundIndex: PropTypes.number,
	currentQuestionIndex: PropTypes.number,
	currentQuestion: PropTypes.shape({
		type: PropTypes.string.isRequired,
		content: PropTypes.oneOfType([
			PropTypes.shape(multipleChoiceQuestionShape)
		])
	})
};

export default QuestionGalleryItem;
