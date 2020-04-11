import React, { useState, useEffect } from 'react';

function useWindowSize() {
	const isClient = typeof window === 'object';

	function getSize() {
		return {
			width: isClient ? window.innerWidth : undefined,
			height: isClient ? window.innerHeight : undefined,
		};
	}

	const [windowSize, setWindowSize] = useState(getSize);

	useEffect(() => {
		if (!isClient) {
			return false;
		}

		function handleResize() {
			setWindowSize(getSize());
		}

		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, []);

	return windowSize;
}

const MediaSizeRender = (props) => {
	const { minWidth, maxWidth, component } = props;
	let windowWidth = useWindowSize().width;

	// no media queries
	if (!minWidth && !maxWidth) {
		return <>{component}</>;
	}

	// min width
	if (minWidth && !maxWidth && windowWidth >= minWidth) {
		return <>{component}</>;
	}

	// max width
	if (maxWidth && !minWidth && windowWidth <= maxWidth) {
		return <>{component}</>;
	}

	// min & max width
	if (
		minWidth &&
		windowWidth >= minWidth &&
		maxWidth &&
		windowWidth <= maxWidth
	) {
		return <>{component}</>;
	}

	return null;
};

export default MediaSizeRender;
