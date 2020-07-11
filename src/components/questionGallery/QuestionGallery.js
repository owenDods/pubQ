import React from 'react';
import PropTypes from 'prop-types';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import { multipleChoiceQuestionShape } from '../shapes/quizShape';

import QuestionGalleryItem from './QuestionGalleryItem';
import QuestionGalleryRoundTitle from './QuestionGalleryRoundTitle';

export const className = 'questionGallery';

const QuestionGallery = ({ roundIndex, questionIndex, currentQuestion, currentRoundName }) => {

	const questionGalleryRoundTitle = (

		<QuestionGalleryRoundTitle text={currentRoundName} />

	);
	const questionGalleryItem = (

		<QuestionGalleryItem
			roundIndex={roundIndex}
			questionIndex={questionIndex}
			currentQuestion={currentQuestion}
		/>

	);
	const galleryContent = questionIndex === '0' ? questionGalleryRoundTitle : questionGalleryItem;

	return (

		<TransitionGroup className={className}>

			<CSSTransition
				timeout={400}
				classNames={className}
				key={`${roundIndex}-${questionIndex}`}
				appear
				in
			>

				{galleryContent}

			</CSSTransition>

		</TransitionGroup>

	);

};

QuestionGallery.propTypes = {
	roundIndex: PropTypes.string,
	questionIndex: PropTypes.string,
	currentQuestion: PropTypes.shape({
		type: PropTypes.string.isRequired,
		content: PropTypes.oneOfType([
			PropTypes.shape(multipleChoiceQuestionShape)
		])
	}),
	currentRoundName: PropTypes.string
};

export default QuestionGallery;
