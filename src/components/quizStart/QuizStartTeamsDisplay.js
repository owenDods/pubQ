import React from 'react';
import PropTypes from 'prop-types';

import List from '../basics/List';
import QuizStartTeamsDisplayListItem from './QuizStartTeamsDisplayListItem';

export const className = 'quizStartTeamsDisplay';

const QuizStartTeamsDisplay = ({ teams }) => (

	<div className={className}>

		<List
			name={className}
			items={teams}
		>

			<QuizStartTeamsDisplayListItem />

		</List>

	</div>

);

QuizStartTeamsDisplay.propTypes = {
	teams: PropTypes.arrayOf(PropTypes.shape({
		number: PropTypes.number.isRequired,
		name: PropTypes.string
	}))
};

export default QuizStartTeamsDisplay;
