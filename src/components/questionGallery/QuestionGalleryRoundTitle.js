import React from 'react';
import PropTypes from 'prop-types';

export const className = 'questionGalleryRoundTitle';

const QuestionGalleryRoundTitle = ({ text }) => (

	<div className={className}>

		<h2>{text}</h2>

	</div>

);

QuestionGalleryRoundTitle.propTypes = {
	text: PropTypes.string
};

export default QuestionGalleryRoundTitle;
