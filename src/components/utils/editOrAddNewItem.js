import findIndex from 'lodash/fp/findIndex';
import get from 'lodash/fp/get';
import sortBy from 'lodash/fp/sortBy';

import editItemInArray from './editItemInArray';

export default (items = [], newItem, keyField) => {

	const itemIndex = findIndex({ [keyField]: get(keyField, newItem) }, items);

	if (itemIndex === -1) {

		return sortBy(keyField, [ ...items, newItem ]);

	}

	return editItemInArray(items, newItem, itemIndex);

};
