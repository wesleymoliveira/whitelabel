const {
  PHASE_DEVELOPMENT_SERVER,
  PHASE_PRODUCTION_BUILD,
} = require("next/constants");

// This uses phases as outlined here: https://nextjs.org/docs/#custom-configuration
module.exports = (phase) => {
  // when started in development mode `next dev` or `npm run dev` regardless of the value of STAGING environmental variable
  const isDev = phase === PHASE_DEVELOPMENT_SERVER;
  // when `next build` or `npm run build` is used
  const isProd =
    phase === PHASE_PRODUCTION_BUILD && process.env.STAGING !== "1";
  // when `next build` or `npm run build` is used
  const isStaging =
    phase === PHASE_PRODUCTION_BUILD && process.env.STAGING === "1";

  console.log(`isDev:${isDev} isProd:${isProd} isStaging:${isStaging}`);

  const env = {
    NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL,
    NEXT_PUBLIC_VERCEL_URL: process.env.NEXT_PUBLIC_VERCEL_URL,
    NEXT_PUBLIC_WEBSOCKET_ENDPOINT: process.env.NEXT_PUBLIC_WEBSOCKET_ENDPOINT,
    NEXT_PUBLIC_IMG_CLOUD: process.env.NEXT_PUBLIC_IMG_CLOUD,
    NEXT_PUBLIC_IMG_PRESET: process.env.NEXT_PUBLIC_IMG_PRESET,
  };

  console.log("NEXT_PUBLIC_SITE_URL", env.NEXT_PUBLIC_SITE_URL);
  console.log("NEXT_PUBLIC_VERCEL_URL", env.NEXT_PUBLIC_VERCEL_URL);

  // Do an environment check
  Object.keys(env).forEach((key) => {
    if (!env[key]) console.error(`Missing env variable ${key}`);
  });

  // next.config.js object
  return {
    reactStrictMode: false,
    images: {
      domains: ["res.cloudinary.com"],
    },
    env,
  };
};
