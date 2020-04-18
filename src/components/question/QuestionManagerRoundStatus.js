import React from 'react';
// import PropTypes from 'prop-types';

import QuestionManagerQuestionStatus from './QuestionManagerQuestionStatus';

export const className = 'questionManagerRoundStatus';

const QuestionManagerRoundStatus = () => (

	<div className={className}>

		<div className={`${className}__roundStatus`}>

			<label className={`${className}__roundCounter`}>

				<span>Round 1 of 5</span>

			</label>

			<label className={`${className}__roundLabel`}>

				<span>Pokémon</span>

			</label>

		</div>

		<QuestionManagerQuestionStatus totalQuestions={10} />

	</div>

);

QuestionManagerRoundStatus.propTypes = {};

export default QuestionManagerRoundStatus;
