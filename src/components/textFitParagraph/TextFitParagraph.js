import React, { useRef, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

export const className = 'textFitParagraph';

const TextFitParagraph = ({ text }) => {

	const containerEl = useRef(null);
	const paragraphEl = useRef(null);
	const [ fontPercentage, setFontPercentage ] = useState(100);
	useEffect(() => {

		const { height: containerHeight } = containerEl.current.getBoundingClientRect();
		const { height: paragraphHeight } = paragraphEl.current.getBoundingClientRect();

		if (paragraphHeight > containerHeight) {

			setFontPercentage(oldPercentage => (oldPercentage - 5));

		}

	});

	const paragraphStyle = { fontSize: `${fontPercentage}%` };

	return (

		<div ref={containerEl} className={className}>

			<p ref={paragraphEl} style={paragraphStyle}>{text}</p>

		</div>

	);

};

TextFitParagraph.propTypes = {
	text: PropTypes.string
};

export default TextFitParagraph;
