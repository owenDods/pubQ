import { useRef, useEffect } from 'react';

export default listener => {

	const listenerRef = useRef(null);

	useEffect(() => {

		listenerRef.current = listener;

		window.addEventListener('resize', listenerRef.current);

		return () => window.removeEventListener('resize', listenerRef.current);

	}, []);

};
