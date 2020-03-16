import React from 'react';
import PropTypes from 'prop-types';

import map from 'lodash/fp/map';

export const className = 'quizStartTeamsDisplay';

const QuizStartTeamsDisplay = ({ teams }) => (

	<div className={className}>

		{map(({ number, name }) => (

			<label key={`${className}-${number}`}>

				<span className={`${className}__number`}>{number}</span>

				<span>{name}</span>

			</label>

		), teams)}

	</div>

);

QuizStartTeamsDisplay.propTypes = {
	teams: PropTypes.arrayOf(PropTypes.shape({
		number: PropTypes.number.isRequired,
		name: PropTypes.string
	}))
};

export default QuizStartTeamsDisplay;
