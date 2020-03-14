import React from 'react';
import PropTypes from 'prop-types';

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

QuizListItem.propTypes = {
	name: PropTypes.string,
	submitQuizSelection: PropTypes.func,
	isSelected: PropTypes.bool
};

export default QuizListItem;
