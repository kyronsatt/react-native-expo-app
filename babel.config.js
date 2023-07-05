process.env.EXPO_ROUTER_pages_ROOT = '../../src/pages';

module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      "@babel/plugin-proposal-export-namespace-from",
      "react-native-reanimated/plugin",
      require.resolve("expo-router/babel"),
      [
        'module-resolver',
        {
          root: ['./'],
          extensions: ['.js', '.ts', '.tsx', '.json'],
          alias: {
            // This needs to be mirrored in tsconfig.json 'paths'
            _pages: './src/pages',
            _assets: './src/assets',
            _services: './src/services',
            _components: './src/components',
            _atoms: './src/components/atoms',
            _molecules: './src/components/molecules',
            _organisms: './src/components/organisms',
            _contexts: './src/contexts',
            _hooks: './src/hooks',
            _utils: './src/utils',
          },
        },
      ],
      [
        'module:react-native-dotenv',
        {
          moduleName: '@env',
          path: '.env',
          blocklist: null,
          allowlist: null,
          safe: false,
          allowUndefined: true,
        },
      ],
    ],
  };
};
