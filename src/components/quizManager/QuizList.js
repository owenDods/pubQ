import React from 'react';
import map from 'lodash/fp/map';

import QuizListItem from './QuizListItem';

export const className = 'quizList';

const QuizList = ({ quizzes = [] }) => {

	const quizzesLength = quizzes.length;
	let styleClass = className;
	styleClass = quizzesLength > 8 ? `${styleClass} ${className}--overflow` : styleClass;

	return (

		<ul className={styleClass}>

			{map.convert({ cap: false })(({ name }, i) => (

				<QuizListItem name={name} key={`${className}-${i}`} />

			), quizzes)}

		</ul>

	);

};

export default QuizList;
