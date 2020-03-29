import React from 'react';
import PropTypes from 'prop-types';
import map from 'lodash/fp/map';

import quizShape from '../shapes/quizShape';

import QuizListItem from './QuizListItem';

export const className = 'quizList';

const QuizList = ({ quizzes = [], submitQuizSelection, selectedQuizId }) => {

	const quizzesLength = quizzes.length;
	let styleClass = className;
	styleClass = quizzesLength > 8 ? `${styleClass} ${className}--overflow` : styleClass;

	return (

		<ul className={styleClass}>

			{map.convert({ cap: false })(({ name, id, img }, i) => (

				<QuizListItem
					name={name}
					key={`${className}-${i}`}
					submitQuizSelection={() => submitQuizSelection(id)}
					isSelected={selectedQuizId === id}
					img={img}
				/>

			), quizzes)}

		</ul>

	);

};

QuizList.propTypes = {
	quizzes: PropTypes.arrayOf(PropTypes.shape(quizShape)),
	submitQuizSelection: PropTypes.func.isRequired,
	selectedQuizId: PropTypes.number
};

export default QuizList;
