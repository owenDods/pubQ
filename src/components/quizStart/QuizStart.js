import React from 'react';
import PropTypes from 'prop-types';

import Modal from '../modal/Modal';
import QuizStartQuizDisplay from './QuizStartQuizDisplay';
import QuizStartTeamsDisplay from './QuizStartTeamsDisplay';

export const className = 'quizStart';

const QuizStart = ({ quizName, teams }) => (

	<div className={className}>

		<Modal backgroundColour="blue" halfSize>

			<QuizStartQuizDisplay quizName={quizName} />

		</Modal>

		<Modal backgroundColour="red" enter="bottom" halfSize>

			<QuizStartTeamsDisplay teams={teams} />

		</Modal>

	</div>

);

QuizStart.propTypes = {
	quizName: PropTypes.string,
	teams: PropTypes.arrayOf(PropTypes.shape({
		number: PropTypes.number.isRequired,
		name: PropTypes.string
	}))
};

export default QuizStart;
