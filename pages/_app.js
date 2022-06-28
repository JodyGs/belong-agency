import '../styles/globals.css';
import Container from '../components/Container/container';
import React from 'react';
import Overlay from '../components/Overlay';

function MyApp({ Component, pageProps }) {
	// const [overlay, setOverlay] = React.useState(true)


	// if (overlay) return <Overlay/>
	return (
		<Container>
			<Component {...pageProps} />
		</Container>
	);
}

export default MyApp;
