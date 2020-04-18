import React from 'react';
import PropTypes from 'prop-types';

import quizShape from '../shapes/quizShape';

export const className = 'questionManager';

const QuestionManager = ({ fullQuiz }) => {

	console.log(fullQuiz);

	return (<div className={className} />);

};

QuestionManager.propTypes = {
	fullQuiz: PropTypes.shape(quizShape).isRequired
};

export default QuestionManager;
