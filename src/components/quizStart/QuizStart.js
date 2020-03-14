import React from 'react';

import Modal from '../modal/Modal';

export const className = 'quizStart';

const Woop = () => (<p>Woop</p>);

const QuizStart = () => (

	<div className={className}>

		<Modal backgroundColour="blue" halfSize>

			<Woop />

		</Modal>

		<Modal backgroundColour="red" enter="bottom" halfSize>

			<Woop />

		</Modal>

	</div>

);

export default QuizStart;
