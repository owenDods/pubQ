import React from 'react';

import Modal from '../modal/Modal';
import QuizManager from '../quizManager/QuizManager';

const QuizManagerModal = ({ selectedQuiz, setQuiz }) => (

	<Modal label="CHOOSE A QUIZ" backgroundColour="blue">

		<QuizManager selectedQuiz={selectedQuiz} setQuiz={setQuiz} />

	</Modal>

);

export default QuizManagerModal;
