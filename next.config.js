/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    loader: "custom",
  },
  trailingSlash: true,

  reactStrictMode: false,
  // experimental: {
  //   images: {
  //     layoutRaw: true,
  //   },
  // },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
};

module.exports = nextConfig;
