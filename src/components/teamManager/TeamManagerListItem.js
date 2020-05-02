import React from 'react';
import PropTypes from 'prop-types';

import TextInput from '../basics/TextInput';
import Button from '../basics/Button';

export const className = 'teamManagerListItem';

const TeamManagerListItem = ({ index, setTeamName, name, removeTeam, focus }) => {

	const teamNumber = index + 1;
	const teamNotCreatedYet = !name;

	const handleSubmit = val => {

		if (val) {

			setTeamName(teamNumber, val);

		}

	};

	const styleClass = teamNotCreatedYet ? className : `${className} ${className}--completed`;
	const buttonLabel = teamNotCreatedYet ? 'Add Team' : 'Update Team';

	return (

		<div className={styleClass}>

			<label className={`${className}__label`}>

				<span>{teamNotCreatedYet ? '...' : teamNumber}</span>

			</label>

			<TextInput
				onSubmit={handleSubmit}
				value={name}
				placeholder="Enter team name"
				shouldFocusOnMount
				withButton
				buttonLabel={buttonLabel}
				triggerFocus={focus}
			/>

			<Button
				label="X"
				onClick={() => removeTeam(teamNumber)}
				disabled={teamNotCreatedYet}
			/>

		</div>

	);

};

TeamManagerListItem.propTypes = {
	index: PropTypes.number,
	setTeamName: PropTypes.func.isRequired,
	name: PropTypes.string,
	removeTeam: PropTypes.func.isRequired,
	focus: PropTypes.bool
};

export default TeamManagerListItem;
