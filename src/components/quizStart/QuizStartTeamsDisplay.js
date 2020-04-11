import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import List from '../basics/List';
import QuizStartTeamsDisplayListItem from './QuizStartTeamsDisplayListItem';

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

		<Link to={teamSelectionRoute}>

			Go to Team Selection

		</Link>

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
