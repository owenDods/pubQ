import React from 'react';
import PropTypes from 'prop-types';

import QuestionManagerQuestionStatus from './QuestionManagerQuestionStatus';

export const className = 'questionManagerRoundStatus';

const QuestionManagerRoundStatus = props => {

	const {
		totalRounds = 0,
		currentRound = 0,
		currentRoundName,
		totalQuestions,
		currentQuestion
	} = props;

	return (

		<div className={className}>

			<div className={`${className}__roundStatus`}>

				<label className={`${className}__roundCounter`}>

					<span>Round {currentRound + 1} of {totalRounds}</span>

				</label>

				<label className={`${className}__roundLabel`}>

					<span>{currentRoundName}</span>

				</label>

			</div>

			<QuestionManagerQuestionStatus
				totalQuestions={totalQuestions}
				currentQuestion={currentQuestion}
			/>

		</div>

	);

};

QuestionManagerRoundStatus.propTypes = {
	totalRounds: PropTypes.number,
	currentRound: PropTypes.number,
	currentRoundName: PropTypes.string,
	totalQuestions: PropTypes.number,
	currentQuestion: PropTypes.number
};

export default QuestionManagerRoundStatus;
