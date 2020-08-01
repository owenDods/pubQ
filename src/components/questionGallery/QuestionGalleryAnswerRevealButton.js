import React from 'react';
import PropTypes from 'prop-types';

import Button from '../basics/Button';
import QuizIcon from '../quizIcon/QuizIcon';

export const className = 'questionGalleryAnswerRevealButton';

const QuestionGalleryAnswerRevealButton = ({ setAnswerRevealedStatus }) => (

	<div className={className}>

		<Button onClick={() => setAnswerRevealedStatus(true)}>

			<div className={`${className}__buttonContent`}>

				<QuizIcon />

				<span className={`${className}__arrow`}>&#9660;</span>

			</div>

		</Button>

	</div>

);

QuestionGalleryAnswerRevealButton.propTypes = {
	setAnswerRevealedStatus: PropTypes.func.isRequired
};

export default QuestionGalleryAnswerRevealButton;
