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
import Session from '../session/Session';

export const className = 'app';

const App = () => (

	<Router>

		<Route render={({ location }) => (

			<TransitionGroup className={className}>

				<CSSTransition timeout={1000} classNames={className} key={location.pathname.match(/[^/]*\/[^/]*/)[0]}>

					<Switch location={location}>

						<Route path="/session" component={Session} />

						<Route path="/" component={LandingPage} />

					</Switch>

				</CSSTransition>

			</TransitionGroup>

		)} />

	</Router>

);

export default App;
