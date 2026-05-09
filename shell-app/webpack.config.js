const {
  shareAll,
  withModuleFederationPlugin,
} = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({
  name: 'shell', // ✅ REQUIRED (this is what you broke)

  filename: 'remoteEntry.js', // ✅ required if exposing modules

  remotes: {
    shoppingCartApp: 'http://localhost:4201/remoteEntry.js',
    todoApp: 'http://localhost:4202/remoteEntry.js',
  },

  exposes: {
    './AuthService': './src/app/services/auth.service.ts', // ✅ your addition
  },

  shared: {
    ...shareAll({
      singleton: true,
      strictVersion: true,
      requiredVersion: 'auto',
    }),
  },
});