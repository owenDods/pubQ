import React from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route
} from 'react-router-dom';

import LandingPage from '../landingPage/LandingPage';

const App = () => (

	<Router>

		<Switch>

			<Route path="/session">

				<div className="test" />

			</Route>

			<Route path="/">

				<LandingPage />

			</Route>

		</Switch>

	</Router>

);

export default App;
