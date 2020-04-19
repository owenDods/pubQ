import React from 'react';
import PropTypes from 'prop-types';

import List from '../basics/List';
import TeamsListItem from './TeamsListItem';

export const className = 'teamsList';

const TeamsList = ({ teams = [], name }) => {

	const styleClass = teams.length === 1 ? `${className} ${className}--singleTeam` : className;

	return (

		<div className={styleClass}>

			<List
				name={name}
				items={teams}
			>

				<TeamsListItem />

			</List>

		</div>

	);

};

TeamsList.propTypes = {
	teams: PropTypes.arrayOf(PropTypes.shape({
		number: PropTypes.number.isRequired,
		name: PropTypes.string
	})),
	name: PropTypes.string
};

export default TeamsList;
