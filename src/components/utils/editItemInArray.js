export default (items = [], newItem, index) => {

	const itemsBeforeIndex = items.slice(0, index);
	const itemsAfterIndex = items.slice(index + 1);

	return [
		...itemsBeforeIndex,
		{ ...items[index], newItem },
		...itemsAfterIndex
	];

};
