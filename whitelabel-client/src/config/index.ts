const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || process.env.NEXT_PUBLIC_VERCEL_URL;
const siteUrl = baseUrl.startsWith('http') ? baseUrl : `https://${baseUrl}`;
const config = {
	siteUrl
};

export default config;
