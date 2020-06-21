import React, { useRef, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import useWindowResizeListener from '../utils/useWindowResizeListener';

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
	const initiateTextSizeCorrectionIfNeeded = () => {

		if (checkIfTextIsOverflowing()) {

			setShouldHideText(true);
			setFontPercentage(decreaseFontSize);

		}

	};
	useEffect(() => {

		initiateTextSizeCorrectionIfNeeded();

		return resetAll;

	}, [ text ]);
	useEffect(() => {

		if (checkIfTextIsOverflowing()) {

			setFontPercentage(decreaseFontSize);

		} else {

			setShouldHideText(false);

		}

	}, [ fontPercentage ]);

	useWindowResizeListener(initiateTextSizeCorrectionIfNeeded);

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
