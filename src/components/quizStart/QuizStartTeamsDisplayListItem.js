import React from 'react';
import PropTypes from 'prop-types';

export const className = 'quizStartTeamsDisplayListItem';

const QuizStartTeamsDisplayListItem = ({ number, name }) => (

	<label className={className}>

		<span className={`${className}__number`}>{number}</span>

		<span>{name}</span>

	</label>

);

QuizStartTeamsDisplayListItem.propTypes = {
	number: PropTypes.number,
	name: PropTypes.string
};

export default QuizStartTeamsDisplayListItem;
