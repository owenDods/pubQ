import React from 'react';
import PropTypes from 'prop-types';

import QuestionManagerQuestionStatus from './QuestionManagerQuestionStatus';

export const className = 'questionManagerRoundStatus';

const QuestionManagerRoundStatus = props => {

	const {
		totalRounds = 0,
		currentRoundIndex = 0,
		currentRoundName,
		totalQuestions,
		currentQuestionIndex
	} = props;

	return (

		<div className={className}>

			<div className={`${className}__roundStatus`}>

				<label className={`${className}__roundCounter`}>

					<span>Round {currentRoundIndex + 1} of {totalRounds}</span>

				</label>

				<label className={`${className}__roundLabel`}>

					<span>{currentRoundName}</span>

				</label>

			</div>

			<QuestionManagerQuestionStatus
				totalQuestions={totalQuestions}
				currentQuestionIndex={currentQuestionIndex}
			/>

		</div>

	);

};

QuestionManagerRoundStatus.propTypes = {
	totalRounds: PropTypes.number,
	currentRoundIndex: PropTypes.number,
	currentRoundName: PropTypes.string,
	totalQuestions: PropTypes.number,
	currentQuestionIndex: PropTypes.number
};

export default QuestionManagerRoundStatus;
