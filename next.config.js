<<<<<<< HEAD
// module.exports = {
//   i18n: {
//     locales: ["en"],
//     defaultLocale: "en",
//   },
//   target: "serverless",
//   webpack: (config, { isServer }) => {
//     if (!isServer) {
//       config.resolve.fallback.fs = false;
//     }
//     return config;
//   },
// };

const isProd = process.env.NODE_ENV === 'production';

/** @type {import('next').NextConfig} */

module.exports = {
  reactStrictMode: true,
  images: {
    loader: 'akamai',  // Disable image optimization (required for `next export`)
    path: '',          // Serve images from the root
  },
  assetPrefix: isProd ? '/energypartner/' : '',  // Needed for GitHub Pages
  basePath: isProd ? '/energypartner' : '',      // Needed for GitHub Pages
};
=======
// module.exports = {
//   i18n: {
//     locales: ["en"],
//     defaultLocale: "en",
//   },
//   target: "serverless",
//   webpack: (config, { isServer }) => {
//     if (!isServer) {
//       config.resolve.fallback.fs = false;
//     }
//     return config;
//   },
// };

const isProd = process.env.NODE_ENV === 'production';

/** @type {import('next').NextConfig} */
const nextConfig = {
    assetPrefix: isProd ? '/nextly/' : '',
    basePath: isProd ? '/nextly' : '',
};

module.exports = nextConfig;
>>>>>>> b1efac274cbe975a50509b3d7bf6ff81581302fe
