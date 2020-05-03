import React from 'react';
// import PropTypes from 'prop-types';

import get from 'lodash/fp/get';

import QuestionGalleryAnswersDisplay from './QuestionGalleryAnswersDisplay';

export const className = 'questionGalleryItem';

const QuestionGalleryItem = ({ currentRoundIndex, currentQuestionIndex, content }) => {

	console.log(content);

	const questionText = get('question', content);
	const answers = get('answers', content);

	return (

		<div className={className}>

			<p className={`${className}__questionText`}>{questionText}</p>

			<QuestionGalleryAnswersDisplay
				currentRoundIndex={currentRoundIndex}
				currentQuestionIndex={currentQuestionIndex}
				answers={answers}
			/>

		</div>

	);

};

QuestionGalleryItem.propTypes = {};

export default QuestionGalleryItem;
