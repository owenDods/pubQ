import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

import Modal from '../modal/Modal';
import QuizStartQuizDisplay from './QuizStartQuizDisplay';
import QuizStartTeamsDisplay from './QuizStartTeamsDisplay';
import QuizIcon from '../quizIcon/QuizIcon';
import Button from '../basics/Button';

export const className = 'quizStart';

const QuizStart = props => {

	const {
		quizName,
		quizImg,
		teams = [],
		quizSelectionRoute,
		teamSelectionRoute,
		questionSelectionRoute
	} = props;

	const [ intendedRedirectDestination, setIntendedRedirectDestination ] = useState(null);
	const [ redirectDestination, setRedirectDestination ] = useState(null);

	if (redirectDestination) {

		return (<Redirect push to={redirectDestination} />);

	}

	const ableToBeginQuiz = quizName && teams.length;
	const startQuizButton = ableToBeginQuiz ? (

		<div className={`${className}__startButton`}>

			<div className={`${className}__startButtonBackground`}>

				<QuizIcon />

				<Button label="START!" onClick={() => setIntendedRedirectDestination(questionSelectionRoute)} />

				<QuizIcon />

			</div>

		</div>

	) : null;

	return (

		<div className={className}>

			<Modal backgroundColour="blue" halfSize>

				<QuizStartQuizDisplay
					quizName={quizName}
					quizImg={quizImg}
					quizSelectionRoute={quizSelectionRoute}
					intendedRedirectDestination={intendedRedirectDestination}
					setIntendedRedirectDestination={setIntendedRedirectDestination}
					setRedirectDestination={setRedirectDestination}
					questionSelectionRoute={questionSelectionRoute}
				/>

			</Modal>

			<Modal backgroundColour="red" enter="bottom" halfSize>

				<QuizStartTeamsDisplay
					teams={teams}
					teamSelectionRoute={teamSelectionRoute}
					intendedRedirectDestination={intendedRedirectDestination}
					setIntendedRedirectDestination={setIntendedRedirectDestination}
					setRedirectDestination={setRedirectDestination}
				/>

			</Modal>

			{startQuizButton}

		</div>

	);

};

QuizStart.propTypes = {
	quizName: PropTypes.string,
	quizImg: PropTypes.string,
	teams: PropTypes.arrayOf(PropTypes.shape({
		number: PropTypes.number.isRequired,
		name: PropTypes.string
	})),
	quizSelectionRoute: PropTypes.string,
	teamSelectionRoute: PropTypes.string,
	questionSelectionRoute: PropTypes.string
};

export default QuizStart;
