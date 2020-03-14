import React from 'react';
import PropTypes from 'prop-types';

import Modal from '../modal/Modal';
import QuizManager from './QuizManager';

const QuizManagerModal = ({ selectedQuizId, setQuiz }) => (

	<Modal label="CHOOSE A QUIZ" backgroundColour="blue">

		<QuizManager selectedQuizId={selectedQuizId} setQuiz={setQuiz} />

	</Modal>

);

QuizManagerModal.propTypes = {
	selectedQuizId: PropTypes.number,
	setQuiz: PropTypes.func
};

export default QuizManagerModal;
