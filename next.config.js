const prismic = require("@prismicio/client");

const sm = require("./sm.json");

const nextConfig = async () => {
  const client = prismic.createClient(sm.apiEndpoint);

  const repository = await client.getRepository();
  const locales = repository.languages.map((lang) => lang.id);

  return {
    reactStrictMode: true,
    i18n: {
      locales,
      defaultLocale: locales[0],
    },
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'images.prismic.io',
          port: '',
          pathname: '/frontin/**',
        },
      ],
    },
    // webpack(config) {
    //   config.module.rules.push({
    //     test: /\.svg$/,
    //     use: ["@svgr/webpack"]
    //   });

    //   return config;
    // }
  };
};

module.exports = nextConfig;
