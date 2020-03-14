import React from 'react';

export const className = 'quizListItem';

const QuizListItem = ({ name, submitQuizSelection, isSelected }) => {

	const styleClass = isSelected ? `${className} ${className}--selected` : className;

	return (

		<li className={styleClass} onClick={submitQuizSelection}>

			<div className={`${className}__icon`} />

			<label>{name}</label>

		</li>

	);

};

export default QuizListItem;
