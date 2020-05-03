import React from 'react';
import PropTypes from 'prop-types';
import get from 'lodash/fp/get';
import getOr from 'lodash/fp/getOr';

import quizShape from '../shapes/quizShape';

import QuestionManagerRoundStatus from './QuestionManagerRoundStatus';
import QuestionGallery from '../questionGallery/QuestionGallery';
import QuestionManagerTeamsStatus from './QuestionManagerTeamsStatus';

export const className = 'questionManager';

const QuestionManager = ({ fullQuiz, quizLocationStatus, teams }) => {

	console.log(fullQuiz);

	const rounds = getOr([], 'rounds', fullQuiz);
	const totalRounds = rounds.length;
	const currentRoundIndex = get('currentRound', quizLocationStatus);

	const currentRoundObject = rounds[currentRoundIndex];
	const currentRoundName = get('name', currentRoundObject);
	const currentRoundQuestions = getOr([], 'questions', currentRoundObject);

	const currentRoundTotalQuestions = currentRoundQuestions.length;
	const currentQuestionIndex = get('currentQuestion', quizLocationStatus);

	return (

		<div className={className}>

			<QuestionManagerRoundStatus
				totalRounds={totalRounds}
				currentRoundIndex={currentRoundIndex}
				currentRoundName={currentRoundName}
				totalQuestions={currentRoundTotalQuestions}
				currentQuestionIndex={currentQuestionIndex}
			/>

			<QuestionGallery
				currentRoundIndex={currentRoundIndex}
				currentQuestionIndex={currentQuestionIndex}
				currentQuestion={currentRoundQuestions[currentQuestionIndex]}
			/>

			<QuestionManagerTeamsStatus teams={teams} />

		</div>

	);

};

QuestionManager.propTypes = {
	fullQuiz: PropTypes.shape(quizShape),
	quizLocationStatus: PropTypes.shape({
		currentRound: PropTypes.number,
		currentQuestion: PropTypes.number
	}),
	teams: PropTypes.arrayOf(PropTypes.shape({
		number: PropTypes.number.isRequired,
		name: PropTypes.string
	}))
};

export default QuestionManager;
