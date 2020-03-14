import React, { cloneElement } from 'react';
import PropTypes from 'prop-types';
import {
	TransitionGroup,
	CSSTransition
} from 'react-transition-group';

import map from 'lodash/fp/map';

export const className = 'list';

const List = ({ name = '', items = [], children }) => (

	<TransitionGroup className={className} component="ul">

		{map.convert({ cap: false })((item, i) => (

			<CSSTransition
				timeout={300}
				classNames={className}
				key={`${className}-${name}-${i}`}
			>

				<li>

					{cloneElement(children, { ...item, index: i })}

				</li>

			</CSSTransition>

		), items)}

	</TransitionGroup>

);

List.propTypes = {
	name: PropTypes.string,
	items: PropTypes.arrayOf(PropTypes.shape({})),
	children: PropTypes.element
};

export default List;
