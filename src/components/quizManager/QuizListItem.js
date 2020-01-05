import React from 'react';

export const className = 'quizListItem';

const QuizListItem = ({ name }) => (

	<li className={className}>

		<div className={`${className}__icon`} />

		<label>{name}</label>

	</li>

);

export default QuizListItem;
