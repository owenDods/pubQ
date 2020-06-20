import React from 'react';
import PropTypes from 'prop-types';

export const className = 'questionManagerQuestionStatus';

const QuestionManagerQuestionStatus = ({ totalQuestions = 0, questionIndex = 0 }) => {

	const questionStatusItems = [];

	while (questionStatusItems.length < totalQuestions) {

		const currentLength = questionStatusItems.length;
		const statusItemClass = `${className}__statusItem`;
		const isCurrentQuestion = currentLength === questionIndex;
		const statusItemStyleClass = isCurrentQuestion ? `${statusItemClass} ${statusItemClass}--currentQuestion` : statusItemClass;

		questionStatusItems.push(

			<label
				key={`${className}-statusItem-${currentLength}`}
				className={statusItemStyleClass}
			>

				<span>{currentLength + 1}</span>

			</label>

		);

	}

	const tooFewQuestions = questionStatusItems.length < 2;
	const styleClass = tooFewQuestions ? `${className} ${className}--tooFewQuestions` : className;

	return (

		<div className={styleClass}>

			{questionStatusItems}

		</div>

	);

};

QuestionManagerQuestionStatus.propTypes = {
	totalQuestions: PropTypes.number,
	questionIndex: PropTypes.number
};

export default QuestionManagerQuestionStatus;
