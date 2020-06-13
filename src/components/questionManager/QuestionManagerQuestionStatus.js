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

			<div
				key={`${className}-statusItem-${currentLength}`}
				className={statusItemStyleClass}
			/>

		);

	}

	const tooFewQuestions = questionStatusItems.length < 2;
	const currentQuestionStyle = tooFewQuestions ? {} : {
		left: `calc(((100% - 16px) / ${totalQuestions - 1}) * ${questionIndex})`
	};

	const styleClass = tooFewQuestions ? `${className} ${className}--tooFewQuestions` : className;

	return (

		<div className={styleClass}>

			{questionStatusItems}

			<div className={`${className}__currentQuestion`} style={currentQuestionStyle}>

				<label>

					<span>{questionIndex + 1}</span>

				</label>

			</div>

		</div>

	);

};

QuestionManagerQuestionStatus.propTypes = {
	totalQuestions: PropTypes.number,
	questionIndex: PropTypes.number
};

export default QuestionManagerQuestionStatus;
