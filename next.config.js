const withFonts = require("next-fonts");

module.exports = withFonts({
    serverRuntimeConfig: {
        secret: 'THIS IS USED TO SIGN AND VERIFY JWT TOKENS, REPLACE IT WITH YOUR OWN SECRET, IT CAN BE ANY STRING',
        ROOT: __dirname,
        DB_DIALECT: process.env.DB_DIALECT,
        DB_URL: process.env.DB_URL,
        JWT_KEY: process.env.JWT_KEY,
        PORT: process.env.PORT,
    },
    webpack(config, options) {
        return config;
      },
})

/*const withPWA = require('next-pwa')({
    dest: 'public'
  });
  
  const settings = {
    future: {webpack5: true},
    pwa: {
      dest: 'public',
      fallbacks: {
        image: '/images/fallback.png',
      },
    },
    webpack: (config) => {
      config.experiments = {
        topLevelAwait: true,
      };
      config.watchOptions = {
        ignored: /node_modules\/(?!@confluence|@atlaskit)/,
        poll: 1000,
      }
      return config;
    },
  };
  
  module.exports = process.env.NODE_ENV !== 'production' ? settings : withPWA(settings);*/
  

/// verificar si esta tomando las variables de entorno desde el documento .env, si no se instalara donentv para que pueda tomarlo
