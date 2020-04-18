import React from 'react';
import PropTypes from 'prop-types';

import QuizIcon from '../quizIcon/QuizIcon';

export const className = 'questionManagerQuestionStatus';

const QuestionManagerQuestionStatus = ({ totalQuestions = 0, currentQuestion }) => {

	const questionStatusItems = [];

	while (questionStatusItems.length < totalQuestions) {

		const currentLength = questionStatusItems.length;
		const statusItemClass = `${className}__statusItem`;
		const isCurrentQuestion = currentLength === currentQuestion;
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
		left: `calc(((100% - 32px) / ${totalQuestions - 1}) * ${currentQuestion})`
	};

	const styleClass = tooFewQuestions ? `${className} ${className}--tooFewQuestions` : className;

	return (

		<div className={styleClass}>

			{questionStatusItems}

			<div className={`${className}__currentQuestion`} style={currentQuestionStyle}>

				<QuizIcon />

				<div className={`${className}__currentQuestionCounter`}>

					<label className={`${className}__currentQuestionCount`}>

						<span>{currentQuestion + 1}</span>

					</label>

					<label className={`${className}__currentQuestionCountTotal`}>

						<span>/ 10</span>

					</label>

				</div>

			</div>

		</div>

	);

};

QuestionManagerQuestionStatus.propTypes = {
	totalQuestions: PropTypes.number,
	currentQuestion: PropTypes.number
};

export default QuestionManagerQuestionStatus;
