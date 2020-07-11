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

const QuestionManager = ({ fullQuiz, roundIndex, questionIndex, teams, questionBaseRoute }) => {

	const rounds = getOr([], 'rounds', fullQuiz);
	const currentRoundObject = rounds[roundIndex];
	const currentRoundName = get('name', currentRoundObject);
	const currentRoundQuestions = getOr([], 'questions', currentRoundObject);
	const currentRoundTotalQuestions = currentRoundQuestions.length;

	return (

		<div className={className}>

			<QuestionManagerRoundStatus
				currentRoundName={currentRoundName}
				totalQuestions={currentRoundTotalQuestions}
				questionIndex={questionIndex}
			/>

			<QuestionGallery
				roundIndex={roundIndex}
				questionIndex={questionIndex}
				currentQuestion={currentRoundQuestions[Number(questionIndex) - 1]}
				currentRoundName={currentRoundName}
			/>

			<QuestionManagerTeamsStatus teams={teams} />

			<QuestionManagerNav
				rounds={rounds}
				roundIndex={roundIndex}
				totalQuestions={currentRoundTotalQuestions}
				questionIndex={questionIndex}
				questionBaseRoute={questionBaseRoute}
			/>

		</div>

	);

};

QuestionManager.propTypes = {
	fullQuiz: PropTypes.shape(quizShape),
	roundIndex: PropTypes.string,
	questionIndex: PropTypes.string,
	teams: PropTypes.arrayOf(PropTypes.shape({
		number: PropTypes.number.isRequired,
		name: PropTypes.string
	})),
	questionBaseRoute: PropTypes.string
};

export default QuestionManager;
