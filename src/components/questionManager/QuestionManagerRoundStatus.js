import React from 'react';
import PropTypes from 'prop-types';

import QuestionManagerQuestionStatus from './QuestionManagerQuestionStatus';

export const className = 'questionManagerRoundStatus';

const QuestionManagerRoundStatus = props => {

	const {
		currentRoundName,
		totalQuestions,
		questionIndex
	} = props;

	const styleClass = questionIndex === '0' ? `${className} ${className}--hide` : className;

	return (

		<div className={styleClass}>

			<label className={`${className}__roundLabel`}>

				<span>{currentRoundName}</span>

			</label>

			<QuestionManagerQuestionStatus
				totalQuestions={totalQuestions}
				questionIndex={Number(questionIndex) - 1}
			/>

		</div>

	);

};

QuestionManagerRoundStatus.propTypes = {
	currentRoundName: PropTypes.string,
	totalQuestions: PropTypes.number,
	questionIndex: PropTypes.string
};

export default QuestionManagerRoundStatus;
