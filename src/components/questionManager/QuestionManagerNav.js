import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

import getOr from 'lodash/fp/getOr';

import { roundsShape } from '../shapes/quizShape';

import useDocumentEventListener from '../utils/useDocumentEventListener';

import Button from '../basics/Button';

export const defaultNextRoundAndQuestionIndexes = { nextRoundIndex: null, nextQuestionIndex: null };
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

			const newPrevRoundIndex = Number(roundIndex) - 1;

			if (newPrevRoundIndex >= 0) {

				newRoundIndex = newPrevRoundIndex;

				const prevRoundObject = rounds[newRoundIndex];
				const prevRoundQuestions = getOr([], 'questions', prevRoundObject);
				const prevRoundTotalQuestions = prevRoundQuestions.length;

				newQuestionIndex = prevRoundTotalQuestions - 1;

			} else {

				newQuestionIndex = Number(questionIndex);

			}

		}

		updateIndexes(newRoundIndex, newQuestionIndex);

	};
	const handleForwardNav = () => {

		let newQuestionIndex = Number(questionIndex) + 1;
		let newRoundIndex = Number(roundIndex);

		if (newQuestionIndex > totalQuestions) {

			const newNextRoundIndex = Number(roundIndex) + 1;

			if (newNextRoundIndex < rounds.length) {

				newRoundIndex = newNextRoundIndex;

				newQuestionIndex = 0;

			} else {

				newQuestionIndex = Number(questionIndex);

			}

		}

		updateIndexes(newRoundIndex, newQuestionIndex);

	};

	const [ keydownKey, setKeydownKey ] = useState(null);
	const handleKeyboardNav = ({ key }) => {

		if (key === 'ArrowLeft' || key === 'ArrowRight') {

			setKeydownKey(key);

		}

	};
	useEffect(() => {

		switch (keydownKey) {

			case 'ArrowLeft':

				handleBackNav();

				break;

			case 'ArrowRight':

				handleForwardNav();

				break;

			default:

		}

		return () => setKeydownKey(null);

	}, [ keydownKey ]);
	useDocumentEventListener(handleKeyboardNav, 'keydown');

	const needsRouteUpdate = nextRoundIndex || nextRoundIndex === 0
		|| nextQuestionIndex || nextQuestionIndex === 0;
	useEffect(() => {

		if (needsRouteUpdate) {

			setNextRoundAndQuestionIndexes(defaultNextRoundAndQuestionIndexes);

		}

	}, [ nextRoundIndex, nextQuestionIndex ]);
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
