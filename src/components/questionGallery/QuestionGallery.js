import React from 'react';
// import PropTypes from 'prop-types';

import List from '../basics/List';
import QuestionGalleryItem from './QuestionGalleryItem';

export const className = 'questionGallery';

const QuestionGallery = ({ currentRoundIndex, currentQuestionIndex, currentQuestion }) => (

	<div className={className}>

		<List name={className} items={[ currentQuestion ]}>

			<QuestionGalleryItem
				currentRoundIndex={currentRoundIndex}
				currentQuestionIndex={currentQuestionIndex}
			/>

		</List>

	</div>

);

QuestionGallery.propTypes = {};

export default QuestionGallery;
