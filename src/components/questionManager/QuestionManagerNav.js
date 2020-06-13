import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

import getOr from 'lodash/fp/getOr';

import { roundsShape } from '../shapes/quizShape';

import Button from '../basics/Button';

export const defaultNextRoundAndQuestionIndexes = { nextRoundIndex: 0, nextQuestionIndex: 0 };
export const className = 'questionManagerNav';

const QuestionManagerNav = props => {

	const { rounds, roundIndex, totalQuestions, questionIndex, questionBaseRoute } = props;
	const [
		nextRoundAndQuestionIndexes,
		setNextRoundAndQuestionIndexes
	] = useState(defaultNextRoundAndQuestionIndexes);
	const { nextRoundIndex, nextQuestionIndex } = nextRoundAndQuestionIndexes;

	const updateIndexes = (newRoundIndex, newQuestionIndex) => {

		const newIndexes = {
			nextRoundIndex: newRoundIndex,
			nextQuestionIndex: newQuestionIndex
		};

		setNextRoundAndQuestionIndexes(newIndexes);

	};
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

		updateIndexes(newRoundIndex, newQuestionIndex);

	};
	const handleForwardNav = () => {

		let newQuestionIndex = Number(questionIndex) + 1;
		let newRoundIndex = Number(roundIndex);

		if (newQuestionIndex >= totalQuestions) {

			newRoundIndex = Number(roundIndex) + 1;

			newQuestionIndex = 0;

		}

		updateIndexes(newRoundIndex, newQuestionIndex);

	};

	const needsRouteUpdate = nextRoundIndex !== Number(roundIndex)
		|| nextQuestionIndex !== Number(questionIndex);
	const redirectContent = needsRouteUpdate ? (

		<Redirect push to={`${questionBaseRoute}/${nextRoundIndex}/${nextQuestionIndex}`} />

	) : null;

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

			{redirectContent}

		</div>

	);

};

QuestionManagerNav.propTypes = {
	rounds: PropTypes.arrayOf(PropTypes.shape(roundsShape)),
	roundIndex: PropTypes.string,
	totalQuestions: PropTypes.number,
	questionIndex: PropTypes.string,
	questionBaseRoute: PropTypes.string
};

export default QuestionManagerNav;
