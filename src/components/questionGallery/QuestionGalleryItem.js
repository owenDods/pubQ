import React from 'react';
import PropTypes from 'prop-types';

import get from 'lodash/fp/get';

import { multipleChoiceQuestionShape } from '../shapes/quizShape';

import TextFitParagraph from '../textFitParagraph/TextFitParagraph';
import QuestionGalleryAnswersDisplay from './QuestionGalleryAnswersDisplay';

export const className = 'questionGalleryItem';

const QuestionGalleryItem = props => {

	const {
		currentRoundIndex,
		currentQuestionIndex,
		currentQuestion,
		isAnswerMode,
		answerRevealed,
		setAnswerRevealedStatus
	} = props;

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
				isAnswerMode={isAnswerMode}
				answerRevealed={answerRevealed}
				setAnswerRevealedStatus={setAnswerRevealedStatus}
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
	}),
	isAnswerMode: PropTypes.bool,
	answerRevealed: PropTypes.bool,
	setAnswerRevealedStatus: PropTypes.func
};

export default QuestionGalleryItem;
