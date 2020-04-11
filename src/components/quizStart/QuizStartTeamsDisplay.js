import React from 'react';
import PropTypes from 'prop-types';

import List from '../basics/List';
import QuizStartTeamsDisplayListItem from './QuizStartTeamsDisplayListItem';
import NavLink from '../basics/NavLink';

export const className = 'quizStartTeamsDisplay';

const QuizStartTeamsDisplay = ({ teams = [], teamSelectionRoute }) => {

	const defaultContent = teams.length ? (

		<List
			name={className}
			items={teams}
		>

			<QuizStartTeamsDisplayListItem />

		</List>

	) : null;

	const noTeamsSelectedContent = !teams.length ? (

		<NavLink to={teamSelectionRoute}>

			Go to Team Selection

		</NavLink>

	) : null;

	const styleClass = teams.length === 1 ? `${className} ${className}--singleTeam` : className;

	return (

		<div className={styleClass}>

			{defaultContent}

			{noTeamsSelectedContent}

		</div>

	);

};

QuizStartTeamsDisplay.propTypes = {
	teams: PropTypes.arrayOf(PropTypes.shape({
		number: PropTypes.number.isRequired,
		name: PropTypes.string
	})),
	teamSelectionRoute: PropTypes.string
};

export default QuizStartTeamsDisplay;
