import React from 'react';
import PropTypes from 'prop-types';

import quizShape from '../shapes/quizShape';

import Modal from '../modal/Modal';
import QuizManager from './QuizManager';

const QuizManagerModal = ({ selectedQuizId, setQuiz, quizzes, destinationFromQuizzes }) => (

	<Modal label="CHOOSE A QUIZ" backgroundColour="blue">

		<QuizManager
			selectedQuizId={selectedQuizId}
			setQuiz={setQuiz}
			quizzes={quizzes}
			destinationFromQuizzes={destinationFromQuizzes}
		/>

	</Modal>

);

QuizManagerModal.propTypes = {
	selectedQuizId: PropTypes.number,
	setQuiz: PropTypes.func,
	quizzes: PropTypes.arrayOf(PropTypes.shape(quizShape)),
	destinationFromQuizzes: PropTypes.string
};

export default QuizManagerModal;
