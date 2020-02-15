import React, { useState, useEffect } from 'react';

import quizzesJson from '../../quizzes.json';

import QuizList from './QuizList';

export const className = 'quizManager';

const QuizManager = () => {

	const [ quizzes, setQuizzes ] = useState([]);
	useEffect(() => {

		new Promise(res => res(quizzesJson))
			.then(data => setQuizzes(data));

	}, []);

	return (

		<div className={className}>

			<QuizList quizzes={quizzes} />

		</div>

	);

};

export default QuizManager;
