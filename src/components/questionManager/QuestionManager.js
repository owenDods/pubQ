import React from 'react';
import PropTypes from 'prop-types';
import get from 'lodash/fp/get';
import getOr from 'lodash/fp/getOr';

import quizShape from '../shapes/quizShape';

import QuestionManagerRoundStatus from './QuestionManagerRoundStatus';
import QuestionGallery from '../questionGallery/QuestionGallery';
import QuestionManagerTeamsStatus from './QuestionManagerTeamsStatus';
import QuestionManagerNav from './QuestionManagerNav';

export const className = 'questionManager';

const QuestionManager = ({ fullQuiz, quizLocationStatus, teams }) => {

	const rounds = getOr([], 'rounds', fullQuiz);
	const currentRoundIndex = get('currentRound', quizLocationStatus);

	const currentRoundObject = rounds[currentRoundIndex];
	const currentRoundName = get('name', currentRoundObject);
	const currentRoundQuestions = getOr([], 'questions', currentRoundObject);

	const currentRoundTotalQuestions = currentRoundQuestions.length;
	const currentQuestionIndex = get('currentQuestion', quizLocationStatus);

	return (

		<div className={className}>

			<QuestionManagerRoundStatus
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

			<QuestionManagerNav />

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
