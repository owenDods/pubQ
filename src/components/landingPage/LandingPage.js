import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';

import Button from '../basics/Button';
import QuizIcon from '../quizIcon/QuizIcon';

export const className = 'landingPage';

const LandingPage = () => {

	const [ isStartPressed, updateStartPressedState ] = useState(false);

	const redirectContent = (<Redirect push to="/session/addTeams" />);

	return (

		<div className={className}>

			<h1>

				<span>P</span>
				<span>u</span>
				<span>b</span>
				<span>&nbsp;</span>
				<span>Q</span>
				<span>u</span>
				<span>i</span>
				<span>z</span>

			</h1>

			<Button
				label="Start"
				onClick={() => updateStartPressedState(!isStartPressed)}
			/>

			<QuizIcon />
			<QuizIcon />
			<QuizIcon />
			<QuizIcon />

			{isStartPressed ? redirectContent : null}

		</div>

	);

};

export default LandingPage;
