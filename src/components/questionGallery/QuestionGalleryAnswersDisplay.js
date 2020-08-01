import React from 'react';
import PropTypes from 'prop-types';

import map from 'lodash/fp/map';

import List from '../basics/List';
import QuestionGalleryAnswersDisplayItem from './QuestionGalleryAnswersDisplayItem';
import QuestionGalleryAnswerRevealButton from './QuestionGalleryAnswerRevealButton';

export const className = 'questionGalleryAnswersDisplay';

const QuestionGalleryAnswersDisplay = props => {

	const { currentRoundIndex, currentQuestionIndex, answers, isAnswerMode } = props;

	const questionGalleryAnswerRevealButton = isAnswerMode ? (

		<QuestionGalleryAnswerRevealButton />

	) : null;

	return (

		<div className={className}>

			<List
				name={`${className}-${currentRoundIndex}-${currentQuestionIndex}`}
				items={map(answer => ({ text: answer }), answers)}
			>

				<QuestionGalleryAnswersDisplayItem />

			</List>

			{questionGalleryAnswerRevealButton}

		</div>

	);

};

QuestionGalleryAnswersDisplay.propTypes = {
	currentRoundIndex: PropTypes.number,
	currentQuestionIndex: PropTypes.number,
	answers: PropTypes.arrayOf(PropTypes.string),
	isAnswerMode: PropTypes.bool
};

export default QuestionGalleryAnswersDisplay;
