import '@/styles/globals.css';

import { NextIntlClientProvider } from 'next-intl';
import { Montserrat } from 'next/font/google';
import { useRouter } from 'next/router';

import Footer from '@/layouts/footer';
import Header from '@/layouts/header';

import type { AppProps } from 'next/app';
const montserrat = Montserrat({
	variable: '--font-montserrat',
	subsets: ['latin'],
	weight: ['300', '600', '900'],
});

export default function App({ Component, pageProps }: AppProps) {
	const router = useRouter();
	return (
		<>
			<main className={`${montserrat.className}`}>
				<NextIntlClientProvider
					locale={router.locale}
					timeZone="Europe/Paris"
					messages={pageProps.messages}
				>
					<Header />
					<Component {...pageProps} />
					<Footer />
				</NextIntlClientProvider>
			</main>
		</>
	);
}
