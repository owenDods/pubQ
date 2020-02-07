import React, { cloneElement } from 'react';
import map from 'lodash/fp/map';

export const className = 'list';

const List = ({ name = '', items = [], children }) => (

	<ul className={className}>

		{map.convert({ cap: false })((item, i) => (

			cloneElement(children, { ...item, key: `${className}-${name}-${i}`, index: i })

		), items)}

	</ul>

);

export default List;
