/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    loader: "custom",
  },
  trailingSlash: true,

  reactStrictMode: true,
  // experimental: {
  //   images: {
  //     layoutRaw: true,
  //   },
  // },
  webpack(config, { isServer }) {
    // if (isServer) {
    //   require("./scripts/sitemap-generator");
    // }
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
};

module.exports = nextConfig;
