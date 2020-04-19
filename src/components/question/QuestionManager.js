import React from 'react';
import PropTypes from 'prop-types';
import get from 'lodash/fp/get';
import getOr from 'lodash/fp/getOr';

import quizShape from '../shapes/quizShape';

import QuestionManagerRoundStatus from './QuestionManagerRoundStatus';

export const className = 'questionManager';

const QuestionManager = ({ fullQuiz, quizLocationStatus }) => {

	console.log(fullQuiz);

	const rounds = getOr([], 'rounds', fullQuiz);
	const totalRounds = rounds.length;
	const currentRound = get('currentRound', quizLocationStatus);

	const currentRoundObject = rounds[currentRound];
	const currentRoundName = get('name', currentRoundObject);
	const currentRoundQuestions = getOr([], 'questions', currentRoundObject);

	const currentRoundTotalQuestions = currentRoundQuestions.length;
	const currentQuestion = get('currentQuestion', quizLocationStatus);

	return (

		<div className={className}>

			<QuestionManagerRoundStatus
				totalRounds={totalRounds}
				currentRound={currentRound}
				currentRoundName={currentRoundName}
				totalQuestions={currentRoundTotalQuestions}
				currentQuestion={currentQuestion}
			/>

		</div>

	);

};

QuestionManager.propTypes = {
	fullQuiz: PropTypes.shape(quizShape),
	quizLocationStatus: PropTypes.shape({
		currentRound: PropTypes.number,
		currentQuestion: PropTypes.number
	})
};

export default QuestionManager;
