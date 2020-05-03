import React from 'react';
import PropTypes from 'prop-types';

export const className = 'questionGalleryAnswersDisplayItem';

const QuestionGalleryAnswersDisplayItem = ({ text }) => (

	<div className={className}>

		<label>{text}</label>

	</div>

);

QuestionGalleryAnswersDisplayItem.propTypes = {
	text: PropTypes.string
};

export default QuestionGalleryAnswersDisplayItem;
