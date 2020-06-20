import React, { useRef, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const decreaseFontSize = oldPercentage => (oldPercentage - 5);

export const className = 'textFitParagraph';

const TextFitParagraph = ({ text }) => {

	const containerEl = useRef(null);
	const paragraphEl = useRef(null);
	const [ fontPercentage, setFontPercentage ] = useState(100);
	const [ shouldHideText, setShouldHideText ] = useState(false);
	const resetAll = () => {

		setFontPercentage(100);
		setShouldHideText(false);

	};
	const checkIfTextIsOverflowing = () => {

		const { height: containerHeight } = containerEl.current.getBoundingClientRect();
		const { height: paragraphHeight } = paragraphEl.current.getBoundingClientRect();

		return paragraphHeight > containerHeight;

	};
	useEffect(() => {

		if (checkIfTextIsOverflowing()) {

			setShouldHideText(true);
			setFontPercentage(decreaseFontSize);

		}

		return resetAll;

	}, [ text ]);
	useEffect(() => {

		if (shouldHideText && checkIfTextIsOverflowing()) {

			setFontPercentage(decreaseFontSize);

		} else {

			setShouldHideText(false);

		}

	}, [ fontPercentage ]);

	const paragraphStyle = { fontSize: `${fontPercentage}%` };

	const styleClass = shouldHideText ? `${className} ${className}--hideText` : className;

	return (

		<div ref={containerEl} className={styleClass}>

			<p ref={paragraphEl} style={paragraphStyle}>{text}</p>

		</div>

	);

};

TextFitParagraph.propTypes = {
	text: PropTypes.string
};

export default TextFitParagraph;
