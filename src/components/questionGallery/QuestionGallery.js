import React from 'react';
import PropTypes from 'prop-types';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import { multipleChoiceQuestionShape } from '../shapes/quizShape';

import List from '../basics/List';
import QuestionGalleryItem from './QuestionGalleryItem';

export const className = 'questionGallery';

const QuestionGallery = ({ roundIndex, questionIndex, currentQuestion }) => (

	<TransitionGroup className={className}>

		<CSSTransition
			timeout={200}
			classNames={className}
			key={`${roundIndex}-${questionIndex}`}
			appear
			in
		>

			<QuestionGalleryItem
				roundIndex={roundIndex}
				questionIndex={questionIndex}
				currentQuestion={currentQuestion}
			/>

		</CSSTransition>

	</TransitionGroup>

);

QuestionGallery.propTypes = {
	roundIndex: PropTypes.string,
	questionIndex: PropTypes.string,
	currentQuestion: PropTypes.shape({
		type: PropTypes.string.isRequired,
		content: PropTypes.oneOfType([
			PropTypes.shape(multipleChoiceQuestionShape)
		])
	})
};

export default QuestionGallery;
