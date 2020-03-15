import React from 'react';
import PropTypes from 'prop-types';

import Modal from '../modal/Modal';
import QuizStartQuizDisplay from './QuizStartQuizDisplay';

export const className = 'quizStart';

const Woop = () => (<p>Woop</p>);

const QuizStart = ({ quizName }) => (

	<div className={className}>

		<Modal backgroundColour="blue" halfSize>

			<QuizStartQuizDisplay quizName={quizName} />

		</Modal>

		<Modal backgroundColour="red" enter="bottom" halfSize>

			<Woop />

		</Modal>

	</div>

);

QuizStart.propTypes = {
	quizName: PropTypes.string
};

export default QuizStart;
