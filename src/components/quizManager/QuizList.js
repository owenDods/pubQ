import React from 'react';
import map from 'lodash/fp/map';

import QuizListItem from './QuizListItem';

export const className = 'quizList';

const QuizList = ({ quizzes }) => (

	<ul className={className}>

		{map.convert({ cap: false })(({ name }, i) => (

			<QuizListItem name={name} key={`${className}-${i}`} />

		), quizzes)}

	</ul>

);

export default QuizList;
