import React from 'react';
import PropTypes from 'prop-types';

import { multipleChoiceQuestionShape } from '../shapes/quizShape';

import List from '../basics/List';
import QuestionGalleryItem from './QuestionGalleryItem';

export const className = 'questionGallery';

const QuestionGallery = ({ currentRoundIndex, currentQuestionIndex, currentQuestion }) => (

	<div className={className}>

		<List name={className} items={[ currentQuestion ]}>

			<QuestionGalleryItem
				currentRoundIndex={currentRoundIndex}
				currentQuestionIndex={currentQuestionIndex}
			/>

		</List>

	</div>

);

QuestionGallery.propTypes = {
	currentRoundIndex: PropTypes.number,
	currentQuestionIndex: PropTypes.number,
	currentQuestion: PropTypes.shape({
		type: PropTypes.string.isRequired,
		content: PropTypes.oneOfType([
			PropTypes.shape(multipleChoiceQuestionShape)
		])
	})
};

export default QuestionGallery;
