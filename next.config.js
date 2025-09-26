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

module.exports = {
  reactStrictMode: true,
  images: {
    loader: 'akamai',
    path: '',
  },
  //assetPrefix: isProd ? '/energypartner/' : '',
  //basePath: isProd ? '/energypartner' : '',
  //basePath: '',
  //assetPrefix: ''
  basePath: isProd && process.env.VERCEL !== '1' ? '/energypartner' : '',
  assetPrefix: isProd && process.env.VERCEL !== '1' ? '/energypartner/' : '',
};
