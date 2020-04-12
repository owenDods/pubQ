import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

import quizShape from '../shapes/quizShape';

import QuizList from './QuizList';

export const className = 'quizManager';

const QuizManager = ({ setQuiz, closeModal, selectedQuizId, quizzes, destinationFromQuizzes }) => {

	const [ quizHasBeenSelected, setQuizSelectionStatus ] = useState(false);

	if (quizHasBeenSelected) {

		return (<Redirect push to={destinationFromQuizzes} />);

	}

	const submitQuizSelection = quizId => {

		setQuiz(quizId);

		closeModal(() => setQuizSelectionStatus(true));

	};

	return (

		<div className={className}>

			<QuizList
				quizzes={quizzes}
				submitQuizSelection={submitQuizSelection}
				selectedQuizId={selectedQuizId}
			/>

		</div>

	);

};

QuizManager.propTypes = {
	selectedQuizId: PropTypes.number,
	setQuiz: PropTypes.func,
	closeModal: PropTypes.func,
	quizzes: PropTypes.arrayOf(PropTypes.shape(quizShape)),
	destinationFromQuizzes: PropTypes.string
};

export default QuizManager;
