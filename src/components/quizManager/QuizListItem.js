import React from 'react';
import PropTypes from 'prop-types';

import QuizIcon from '../quizIcon/QuizIcon';

export const className = 'quizListItem';

const QuizListItem = ({ name, submitQuizSelection, isSelected, img }) => {

	const iconBackgroundStyle = img ? {
		backgroundImage: `url(${img})`
	} : {};

	let styleClass = isSelected ? `${className} ${className}--selected` : className;
	styleClass = img ? `${styleClass} ${className}--hasImg` : styleClass;

	return (

		<li className={styleClass} onClick={submitQuizSelection}>

			<div className={`${className}__icon`} style={iconBackgroundStyle}>

				<QuizIcon />

			</div>

			<label className={`${className}__name`}>{name}</label>

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
