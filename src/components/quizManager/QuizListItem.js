import React from 'react';
import PropTypes from 'prop-types';

export const className = 'quizListItem';

const QuizListItem = ({ name, submitQuizSelection, isSelected, img }) => {

	const iconBackgroundStyle = img ? {
		backgroundImage: `url(${img})`
	} : {};

	const styleClass = isSelected ? `${className} ${className}--selected` : className;

	return (

		<li className={styleClass} onClick={submitQuizSelection}>

			<div className={`${className}__icon`} style={iconBackgroundStyle} />

			<label>{name}</label>

		</li>

	);

};

QuizListItem.propTypes = {
	name: PropTypes.string,
	submitQuizSelection: PropTypes.func,
	isSelected: PropTypes.bool,
	img: PropTypes.string
};

export default QuizListItem;
