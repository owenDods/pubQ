import React from 'react';
import PropTypes from 'prop-types';

import get from 'lodash/fp/get';

import { multipleChoiceQuestionShape } from '../shapes/quizShape';

import QuestionGalleryAnswersDisplay from './QuestionGalleryAnswersDisplay';

export const className = 'questionGalleryItem';

const QuestionGalleryItem = ({ currentRoundIndex, currentQuestionIndex, content }) => {

	const questionText = get('question', content);
	const answers = get('answers', content);

	return (

		<div className={className}>

			<p className={`${className}__questionText`}>{questionText}</p>

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
	content: PropTypes.oneOfType([
		PropTypes.shape(multipleChoiceQuestionShape)
	])
};

export default QuestionGalleryItem;
