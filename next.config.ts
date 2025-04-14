/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    MICROCMS_SERVICE_DOMAIN: process.env.MICROCMS_SERVICE_DOMAIN,
    MICROCMS_API_KEY: process.env.MICROCMS_API_KEY,
  },
};

module.exports = nextConfig;
