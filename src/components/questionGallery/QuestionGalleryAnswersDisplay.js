import React from 'react';
// import PropTypes from 'prop-types';

import map from 'lodash/fp/map';

import List from '../basics/List';
import QuestionGalleryAnswersDisplayItem from './QuestionGalleryAnswersDisplayItem';

export const className = 'questionGalleryAnswersDisplay';

const QuestionGalleryAnswersDisplay = ({ currentRoundIndex, currentQuestionIndex, answers }) => (

	<div className={className}>

		<List
			name={`${className}-${currentRoundIndex}-${currentQuestionIndex}`}
			items={map(answer => ({ text: answer }), answers)}
		>

			<QuestionGalleryAnswersDisplayItem />

		</List>

	</div>

);

QuestionGalleryAnswersDisplay.propTypes = {};

export default QuestionGalleryAnswersDisplay;
