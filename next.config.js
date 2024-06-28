// next.config.js

module.exports = {
    webpack: (config, { isServer }) => {
      if (!isServer) {
        // Exclude problematic modules from client-side bundle
        config.resolve.fallback = {
          ...config.resolve.fallback,
          child_process: false,
          fs: false,
          net: false,
          tls: false,
          'node-gyp': false,
          npm: false,
        };
  
        // Exclude bcrypt from client-side bundle
        config.resolve.alias['bcrypt'] = false;
      }
  
      return config;
    },
  };
  