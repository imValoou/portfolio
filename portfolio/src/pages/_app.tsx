import '@/styles/globals.css';

import { Montserrat } from 'next/font/google';

import Footer from '@/layouts/footer';
import Header from '@/layouts/header';

import type { AppProps } from 'next/app';

const montserrat = Montserrat({
	variable: '--font-montserrat',
	subsets: ['latin'],
	weight: ['300', '600', '900'],
});

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<main className={`${montserrat.className}`}>
				<Header />
				<Component {...pageProps} />
				<Footer />
			</main>
		</>
	);
}
