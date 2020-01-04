import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';

import Button from '../basics/Button';

export const className = 'landingPage';

const LandingPage = () => {

	const [ isStartPressed, updateStartPressedState ] = useState(false);

	const defaultContent = (

		<div className={className}>

			<h1>Pub Quiz</h1>

			<Button
				label="Start"
				onClick={() => updateStartPressedState(!isStartPressed)}
			/>

		</div>

	);
	const redirectContent = (<Redirect push to="/session" />);

	return isStartPressed ? redirectContent : defaultContent;

};

export default LandingPage;
