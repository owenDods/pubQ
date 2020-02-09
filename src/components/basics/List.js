import React, { cloneElement } from 'react';
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

export default List;
