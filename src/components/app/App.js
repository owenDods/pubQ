import React from 'react';
import PropTypes from 'prop-types';
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

const routeTransitionRenderer = ({ location }) => (

	<TransitionGroup className={className}>

		<CSSTransition timeout={1000} classNames={className} key={location.pathname.match(/[^/]*\/[^/]*/)[0]}>

			<Switch location={location}>

				<Route path="/session">

					<Session />

				</Route>

				<Route path="/">

					<LandingPage />

				</Route>

			</Switch>

		</CSSTransition>

	</TransitionGroup>

);

routeTransitionRenderer.propTypes = {
	location: PropTypes.shape({
		pathname: PropTypes.shape({
			match: PropTypes.string
		})
	})
};

const App = () => (

	<Router>

		<Route render={routeTransitionRenderer} />

	</Router>

);

export default App;
