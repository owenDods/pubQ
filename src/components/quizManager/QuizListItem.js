import React from 'react';

export const className = 'quizListItem';

const QuizListItem = ({ name, submitQuizSelection }) => (

	<li className={className} onClick={submitQuizSelection}>

		<div className={`${className}__icon`} />

		<label>{name}</label>

	</li>

);

export default QuizListItem;
