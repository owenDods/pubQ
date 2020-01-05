import React from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route
} from 'react-router-dom';
import {
	TransitionGroup,
	CSSTransition
} from 'react-transition-group';

import LandingPage from '../landingPage/LandingPage';

export const className = 'app';

const App = () => (

	<Router>

		<Route render={({ location }) => (

			<TransitionGroup className={className}>

				<CSSTransition timeout={1000} classNames={className} key={location.key}>

					<Switch location={location}>

						<Route path="/session">

							<div className={`${className}__content`}>

								<label>HALLO</label>

							</div>

						</Route>

						<Route path="/" component={LandingPage} />

					</Switch>

				</CSSTransition>

			</TransitionGroup>

		)} />

	</Router>

);

export default App;
