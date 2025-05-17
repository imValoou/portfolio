import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
	return (
		<Html lang="en" translate="no">
			<Head />
			<body className="antialiased notranslate">
				<meta name="google" content="notranslate" />
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
