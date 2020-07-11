import { useRef, useEffect } from 'react';

export default (listener, event) => {

	const listenerRef = useRef(null);

	useEffect(() => {

		listenerRef.current = listener;

		document.addEventListener(event, listenerRef.current);

		return () => document.removeEventListener(event, listenerRef.current);

	}, []);

};
