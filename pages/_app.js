import '../styles/globals.css';
import Container from '../components/Container/container';
import React from 'react';
import Overlay from '../components/Overlay';
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }) {
	const [overlay, setOverlay] = React.useState(true)
	const { pathname } = useRouter();

	if (overlay && pathname === "/") return <Overlay overlay={overlay} setOverlay={setOverlay} />
	return (
		<Container>
			<Component {...pageProps} />
		</Container>
	);
}

export default MyApp;
