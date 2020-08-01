import React from 'react';
import PropTypes from 'prop-types';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import map from 'lodash/fp/map';

import List from '../basics/List';
import QuestionGalleryAnswersDisplayItem from './QuestionGalleryAnswersDisplayItem';
import QuestionGalleryAnswerRevealButton from './QuestionGalleryAnswerRevealButton';

export const className = 'questionGalleryAnswersDisplay';

const QuestionGalleryAnswersDisplay = props => {

	const {
		currentRoundIndex,
		currentQuestionIndex,
		answers,
		isAnswerMode,
		answerRevealed,
		setAnswerRevealedStatus
	} = props;

	const questionGalleryAnswerRevealButton = (isAnswerMode && !answerRevealed) ? (

		<CSSTransition
			timeout={200}
			classNames={`${className}__revealButton`}
		>

			<QuestionGalleryAnswerRevealButton setAnswerRevealedStatus={setAnswerRevealedStatus} />

		</CSSTransition>

	) : null;

	return (

		<div className={className}>

			<List
				name={`${className}-${currentRoundIndex}-${currentQuestionIndex}`}
				items={map(answer => ({ text: answer }), answers)}
			>

				<QuestionGalleryAnswersDisplayItem />

			</List>

			<TransitionGroup className={`${className}__revealButton`}>

				{questionGalleryAnswerRevealButton}

			</TransitionGroup>

		</div>

	);

};

QuestionGalleryAnswersDisplay.propTypes = {
	currentRoundIndex: PropTypes.number,
	currentQuestionIndex: PropTypes.number,
	answers: PropTypes.arrayOf(PropTypes.string),
	isAnswerMode: PropTypes.bool,
	answerRevealed: PropTypes.bool,
	setAnswerRevealedStatus: PropTypes.func
};

export default QuestionGalleryAnswersDisplay;
