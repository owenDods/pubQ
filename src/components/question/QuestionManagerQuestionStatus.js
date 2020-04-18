import React from 'react';
import PropTypes from 'prop-types';

export const className = 'questionManagerQuestionStatus';

const QuestionManagerQuestionStatus = ({ totalQuestions = 0 }) => {

	const questionStatusItems = [];

	while (questionStatusItems.length < totalQuestions) {

		questionStatusItems.push(

			<div
				key={`${className}-statusItem-${questionStatusItems.length}`}
				className={`${className}__statusItem`}
			/>

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
	totalQuestions: PropTypes.number
};

export default QuestionManagerQuestionStatus;
