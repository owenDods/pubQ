import React from 'react';
import PropTypes from 'prop-types';

export const className = 'teamsListItem';

const TeamsListItem = ({ number, name }) => (

	<label className={className}>

		<span className={`${className}__number`}>{number}</span>

		<span className={`${className}__name`} title={name}>{name}</span>

	</label>

);

TeamsListItem.propTypes = {
	number: PropTypes.number,
	name: PropTypes.string
};

export default TeamsListItem;
