import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export const className = 'navLink';

const NavLink = ({ to, children }) => (

	<Link className={className} to={to}>

		<span>{children}</span>

	</Link>

);

NavLink.propTypes = {
	to: PropTypes.string,
	children: PropTypes.string
};

export default NavLink;
