import React from 'react';
import PropTypes from 'prop-types';

import quizShape from '../shapes/quizShape';

import Modal from '../modal/Modal';
import QuizManager from './QuizManager';

const QuizManagerModal = ({ selectedQuizId, setQuiz, quizzes }) => (

	<Modal label="CHOOSE A QUIZ" backgroundColour="blue">

		<QuizManager
			selectedQuizId={selectedQuizId}
			setQuiz={setQuiz}
			quizzes={quizzes}
		/>

	</Modal>

);

QuizManagerModal.propTypes = {
	selectedQuizId: PropTypes.number,
	setQuiz: PropTypes.func,
	quizzes: PropTypes.arrayOf(PropTypes.shape(quizShape))
};

export default QuizManagerModal;
