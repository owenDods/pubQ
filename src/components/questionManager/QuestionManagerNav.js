import React from 'react';
import PropTypes from 'prop-types';

import getOr from 'lodash/fp/getOr';

import { roundsShape } from '../shapes/quizShape';

import Button from '../basics/Button';

export const className = 'questionManagerNav';

const QuestionManagerNav = ({ rounds, roundIndex, totalQuestions, questionIndex }) => {

	const handleBackNav = () => {

		let newQuestionIndex = Number(questionIndex) - 1;
		let newRoundIndex = Number(roundIndex);

		if (newQuestionIndex < 0) {

			newRoundIndex = Number(roundIndex) - 1;

			const prevRoundObject = rounds[newRoundIndex];
			const prevRoundQuestions = getOr([], 'questions', prevRoundObject);
			const prevRoundTotalQuestions = prevRoundQuestions.length;

			newQuestionIndex = prevRoundTotalQuestions - 1;

		}

		console.log(newQuestionIndex, newRoundIndex);

	};
	const handleForwardNav = () => {

		let newQuestionIndex = Number(questionIndex) + 1;
		let newRoundIndex = Number(roundIndex);

		if (newQuestionIndex >= totalQuestions) {

			newRoundIndex = Number(roundIndex) + 1;

			newQuestionIndex = 0;

		}

		console.log(newQuestionIndex, newRoundIndex);

	};

	return (

		<div className={className}>

			<div className={`${className}__back`}>

				<Button
					label="&#9664;"
					onClick={handleBackNav}
					disabled={roundIndex === '0' && questionIndex === '0'}
				/>

			</div>

			<div className={`${className}__forward`}>

				<Button label="&#9654;" onClick={handleForwardNav} />

			</div>

		</div>

	);

};

QuestionManagerNav.propTypes = {
	rounds: PropTypes.arrayOf(PropTypes.shape(roundsShape)),
	roundIndex: PropTypes.string,
	totalQuestions: PropTypes.number,
	questionIndex: PropTypes.string
};

export default QuestionManagerNav;
