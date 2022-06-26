/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	i18n: {
		locales: ['en', 'fr'],
		defaultLocale: 'en',
		localeDetection: true,
	},
	trailingSlash: true,
};

module.exports = nextConfig;
