/** @type {import('next').NextConfig} */
const withNextIntl = require("next-intl/plugin")();

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
        port: "",
        pathname: "**",
      },
    ],
  },
};

module.exports = withNextIntl(nextConfig);
