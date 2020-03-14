import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';

import quizzesJson from '../../quizzes.json';

import QuizList from './QuizList';

export const className = 'quizManager';

const QuizManager = ({ setQuiz, closeModal, selectedQuiz }) => {

	const [ quizzes, setQuizzes ] = useState([]);
	useEffect(() => {

		new Promise(res => res(quizzesJson))
			.then(data => setQuizzes(data));

	}, []);

	const [ quizHasBeenSelected, setQuizSelectionStatus ] = useState(false);

	if (quizHasBeenSelected) {

		return (<Redirect push to="/session/quizStart" />);

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
				selectedQuiz={selectedQuiz}
			/>

		</div>

	);

};

export default QuizManager;
