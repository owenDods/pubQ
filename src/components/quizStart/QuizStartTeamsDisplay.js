import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import TeamsList from '../teamsList/TeamsList';
import Button from '../basics/Button';

export const className = 'quizStartTeamsDisplay';

const QuizStartTeamsDisplay = props => {

	const {
		teams = [],
		teamSelectionRoute,
		closeModal,
		intendedRedirectDestination,
		setIntendedRedirectDestination,
		setRedirectDestination
	} = props;

	const defaultContent = teams.length ? (

		<TeamsList
			name={className}
			teams={teams}
		/>

	) : null;

	useEffect(() => {

		if (intendedRedirectDestination) {

			let closeModalCallback;

			if (intendedRedirectDestination === teamSelectionRoute) {

				closeModalCallback = () => setRedirectDestination(intendedRedirectDestination);

			}

			closeModal(closeModalCallback);

		}

	}, [ intendedRedirectDestination ]);
	const noTeamsSelectedContent = !teams.length ? (

		<Button
			label="Go to Team Selection"
			onClick={() => setIntendedRedirectDestination(teamSelectionRoute)}
		/>

	) : null;

	return (

		<div className={className}>

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
	teamSelectionRoute: PropTypes.string,
	closeModal: PropTypes.func,
	intendedRedirectDestination: PropTypes.string,
	setIntendedRedirectDestination: PropTypes.func.isRequired,
	setRedirectDestination: PropTypes.func.isRequired
};

export default QuizStartTeamsDisplay;
