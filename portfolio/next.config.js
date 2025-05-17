/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'firebasestorage.googleapis.com',
				port: '',
				pathname: '/v0/**',
			},
		],
	},
	i18n: {
		locales: ['fr', 'en'],
		defaultLocale: 'fr',
	},
};

module.exports = nextConfig;
