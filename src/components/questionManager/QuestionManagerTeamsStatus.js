import React from 'react';
import PropTypes from 'prop-types';

import TeamsList from '../teamsList/TeamsList';

export const className = 'questionManagerTeamsStatus';

const QuestionManagerTeamsStatus = ({ teams }) => (

	<div className={className}>

		<TeamsList teams={teams} name={className} />

	</div>

);

QuestionManagerTeamsStatus.propTypes = {
	teams: PropTypes.arrayOf(PropTypes.shape({
		number: PropTypes.number.isRequired,
		name: PropTypes.string
	}))
};

export default QuestionManagerTeamsStatus;
