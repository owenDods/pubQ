import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

import getOr from 'lodash/fp/getOr';

import { roundsShape } from '../shapes/quizShape';

import useDocumentEventListener from '../utils/useDocumentEventListener';

import Button from '../basics/Button';

export const defaultNextRoundAndQuestionIndexes = {
	nextRoundIndex: null,
	nextQuestionIndex: null,
	nextAnswerMode: null
};
export const defaultKeydownData = { keydownKey: null, shiftKey: false };
export const className = 'questionManagerNav';

const QuestionManagerNav = props => {

	const {
		rounds,
		roundIndex,
		totalQuestions,
		questionIndex,
		questionBaseRoute,
		isAnswerMode,
		answerRevealed,
		setAnswerRevealedStatus
	} = props;
	const [
		nextRoundAndQuestionIndexes,
		setNextRoundAndQuestionIndexes
	] = useState(defaultNextRoundAndQuestionIndexes);
	const { nextRoundIndex, nextQuestionIndex, nextAnswerMode } = nextRoundAndQuestionIndexes;

	const updateNavParams = (newRoundIndex, newQuestionIndex, newAnswerMode) => {

		const newIndexes = {
			nextRoundIndex: newRoundIndex,
			nextQuestionIndex: newQuestionIndex,
			nextAnswerMode: newAnswerMode
		};

		setNextRoundAndQuestionIndexes(newIndexes);

	};
	const toggledAnswerMode = isAnswerMode ? null : 'answerMode';
	const sameAnswerMode = isAnswerMode ? 'answerMode' : null;
	const handleBackNav = () => {

		let newQuestionIndex = Number(questionIndex) - 1;
		let newRoundIndex = Number(roundIndex);
		let newAnswerMode = sameAnswerMode;

		if (newQuestionIndex < 0) {

			const newPrevRoundIndex = isAnswerMode ? newRoundIndex : Number(roundIndex) - 1;

			if (newPrevRoundIndex >= 0) {

				newRoundIndex = newPrevRoundIndex;
				newAnswerMode = toggledAnswerMode;

				const prevRoundObject = rounds[newRoundIndex];
				const prevRoundQuestions = getOr([], 'questions', prevRoundObject);
				const prevRoundTotalQuestions = prevRoundQuestions.length;

				newQuestionIndex = prevRoundTotalQuestions;

			} else {

				newQuestionIndex = Number(questionIndex);

			}

		}

		updateNavParams(newRoundIndex, newQuestionIndex, newAnswerMode);

	};
	const handleForwardNav = () => {

		let newQuestionIndex = Number(questionIndex) + 1;
		let newRoundIndex = Number(roundIndex);
		let newAnswerMode = sameAnswerMode;

		if (newQuestionIndex > totalQuestions) {

			const newNextRoundIndex = isAnswerMode ? Number(roundIndex) + 1 : newRoundIndex;

			if (newNextRoundIndex < rounds.length) {

				newRoundIndex = newNextRoundIndex;
				newAnswerMode = toggledAnswerMode;

				newQuestionIndex = 0;

			} else {

				newQuestionIndex = Number(questionIndex);

			}

		}

		updateNavParams(newRoundIndex, newQuestionIndex, newAnswerMode);

	};
	const handleGoToPrevRound = () => {

		const newQuestionIndex = 0;

		const isRoundStart = questionIndex === '0';
		let newRoundIndex = (isRoundStart && !isAnswerMode) ? Number(roundIndex) - 1
			: Number(roundIndex);

		const newAnswerMode = (isRoundStart && !(newRoundIndex < 0)) ? toggledAnswerMode
			: sameAnswerMode;

		newRoundIndex = newRoundIndex < 0 ? Number(roundIndex) : newRoundIndex;

		updateNavParams(newRoundIndex, newQuestionIndex, newAnswerMode);

	};
	const handleGoToNextRound = () => {

		let newQuestionIndex = 0;
		let newRoundIndex = isAnswerMode ? Number(roundIndex) + 1 : Number(roundIndex);
		let newAnswerMode = toggledAnswerMode;

		if (newRoundIndex >= rounds.length) {

			newQuestionIndex = Number(questionIndex);
			newRoundIndex = Number(roundIndex);
			newAnswerMode = sameAnswerMode;

		}

		updateNavParams(newRoundIndex, newQuestionIndex, newAnswerMode);

	};

	const [ { keydownKey, shiftKey }, setKeydownKey ] = useState(defaultKeydownData);
	const handleKeyboardNav = ({ key, shiftKey: shift }) => {

		if (key === 'ArrowLeft' || key === 'ArrowRight' || key === 'ArrowDown') {

			setKeydownKey({ keydownKey: key, shiftKey: shift });

		}

	};
	const handleKeyboardBackNav = shiftKeyPressed => {

		if (shiftKeyPressed) {

			handleGoToPrevRound();

		} else {

			handleBackNav();

		}

	};
	const handleKeyboardForwardNav = shiftKeyPressed => {

		if (shiftKeyPressed) {

			handleGoToNextRound();

		} else {

			handleForwardNav();

		}

	};
	useEffect(() => {

		switch (keydownKey) {

			case 'ArrowLeft':

				handleKeyboardBackNav(shiftKey);

				break;

			case 'ArrowRight':

				handleKeyboardForwardNav(shiftKey);

				break;

			case 'ArrowDown':

				if (isAnswerMode && !answerRevealed) {

					setAnswerRevealedStatus(true);

				}

				break;

			default:

		}

		return () => setKeydownKey(defaultKeydownData);

	}, [ keydownKey ]);
	useDocumentEventListener(handleKeyboardNav, 'keydown');

	const needsRouteUpdate = nextRoundIndex || nextRoundIndex === 0
		|| nextQuestionIndex || nextQuestionIndex === 0;
	useEffect(() => {

		if (needsRouteUpdate) {

			setNextRoundAndQuestionIndexes(defaultNextRoundAndQuestionIndexes);

		}

	}, [ nextRoundIndex, nextQuestionIndex ]);
	const answerModeUrlParam = nextAnswerMode ? `/${nextAnswerMode}` : '';
	const redirectContent = needsRouteUpdate ? (

		<Redirect push to={`${questionBaseRoute}/${nextRoundIndex}/${nextQuestionIndex}${answerModeUrlParam}`} />

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
	questionBaseRoute: PropTypes.string,
	isAnswerMode: PropTypes.bool,
	answerRevealed: PropTypes.bool,
	setAnswerRevealedStatus: PropTypes.func
};

export default QuestionManagerNav;
