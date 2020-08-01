import React from 'react';
import PropTypes from 'prop-types';

export const className = 'questionGalleryRoundTitle';

const QuestionGalleryRoundTitle = ({ text, isAnswerMode }) => (

	<div className={className}>

		<h2>{text}</h2>

		{isAnswerMode ? (<h3>Answers</h3>) : null}

	</div>

);

QuestionGalleryRoundTitle.propTypes = {
	text: PropTypes.string,
	isAnswerMode: PropTypes.bool
};

export default QuestionGalleryRoundTitle;
