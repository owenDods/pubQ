import React from 'react';
import PropTypes from 'prop-types';

export const className = 'imgHolder';

const ImgHolder = ({ imgUrl }) => {

	const style = imgUrl ? {
		backgroundImage: `url(${imgUrl})`
	} : {};

	return (

		<div className={className} style={style} />

	);

};

ImgHolder.propTypes = {
	imgUrl: PropTypes.string
};

export default ImgHolder;
