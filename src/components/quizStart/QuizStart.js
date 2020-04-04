import React from 'react';
import PropTypes from 'prop-types';

import Modal from '../modal/Modal';
import QuizStartQuizDisplay from './QuizStartQuizDisplay';
import QuizStartTeamsDisplay from './QuizStartTeamsDisplay';

export const className = 'quizStart';

const QuizStart = ({ quizName, quizImg, teams }) => (

	<div className={className}>

		<Modal backgroundColour="blue" halfSize>

			<QuizStartQuizDisplay quizName={quizName} quizImg={quizImg} />

		</Modal>

		<Modal backgroundColour="red" enter="bottom" halfSize>

			<QuizStartTeamsDisplay teams={teams} />

		</Modal>

	</div>

);

QuizStart.propTypes = {
	quizName: PropTypes.string,
	quizImg: PropTypes.string,
	teams: PropTypes.arrayOf(PropTypes.shape({
		number: PropTypes.number.isRequired,
		name: PropTypes.string
	}))
};

export default QuizStart;
