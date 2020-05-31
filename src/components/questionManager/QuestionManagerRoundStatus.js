import React from 'react';
import PropTypes from 'prop-types';

import QuestionManagerQuestionStatus from './QuestionManagerQuestionStatus';

export const className = 'questionManagerRoundStatus';

const QuestionManagerRoundStatus = props => {

	const {
		currentRoundName,
		totalQuestions,
		currentQuestionIndex
	} = props;

	return (

		<div className={className}>

			<label className={`${className}__roundLabel`}>

				<span>{currentRoundName}</span>

			</label>

			<QuestionManagerQuestionStatus
				totalQuestions={totalQuestions}
				currentQuestionIndex={currentQuestionIndex}
			/>

		</div>

	);

};

QuestionManagerRoundStatus.propTypes = {
	currentRoundName: PropTypes.string,
	totalQuestions: PropTypes.number,
	currentQuestionIndex: PropTypes.number
};

export default QuestionManagerRoundStatus;
