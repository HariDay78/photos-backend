import { mergeConfig, type UserConfig } from 'vite';

export default (config: UserConfig) => {
  // Important: always return the modified config
  return mergeConfig(config, {
    resolve: {
      alias: {
        '@': '/src',
      },
    },
    server: {
      allowedHosts: [
        '1337-shubzz02-photosbackend-e4wlwxnxtt5.ws-us121.gitpod.io'
      ]
    }
  });
};
