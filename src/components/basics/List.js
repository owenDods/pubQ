import React, { cloneElement } from 'react';
import map from 'lodash/fp/map';

export const className = 'list';

const List = ({ name = '', items = [], children }) => (

	<ul className={className}>

		{map.convert({ cap: false })((item, i) => (

			<li key={`${className}-${name}-${i}`}>

				{cloneElement(children, { ...item, index: i })}

			</li>

		), items)}

	</ul>

);

export default List;
