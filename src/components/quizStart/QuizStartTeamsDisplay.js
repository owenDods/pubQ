import React from 'react';
import PropTypes from 'prop-types';

import List from '../basics/List';
import QuizStartTeamsDisplayListItem from './QuizStartTeamsDisplayListItem';

export const className = 'quizStartTeamsDisplay';

const QuizStartTeamsDisplay = ({ teams = [] }) => {

	const styleClass = teams.length === 1 ? `${className} ${className}--singleTeam` : className;

	return (

		<div className={styleClass}>

			<List
				name={className}
				items={teams}
			>

				<QuizStartTeamsDisplayListItem />

			</List>

		</div>

	);

};

QuizStartTeamsDisplay.propTypes = {
	teams: PropTypes.arrayOf(PropTypes.shape({
		number: PropTypes.number.isRequired,
		name: PropTypes.string
	}))
};

export default QuizStartTeamsDisplay;
