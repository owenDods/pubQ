import React from 'react';
import PropTypes from 'prop-types';

import quizShape from '../shapes/quizShape';

import QuestionManagerRoundStatus from './QuestionManagerRoundStatus';

export const className = 'questionManager';

const QuestionManager = ({ fullQuiz }) => {

	console.log(fullQuiz);

	return (

		<div className={className}>

			<QuestionManagerRoundStatus />

		</div>

	);

};

QuestionManager.propTypes = {
	fullQuiz: PropTypes.shape(quizShape).isRequired
};

export default QuestionManager;
