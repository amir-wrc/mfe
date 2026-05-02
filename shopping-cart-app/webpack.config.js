const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

  name: 'shoppingCartApp',

  exposes: {
    './Module': './src/app/shopping/shopping.module.ts',
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' })
  },

  sharedMappings: [],
  
}, {
  output: {
    uniqueName: 'shoppingCartApp',
    publicPath: 'auto'
  },
  optimization: {
    runtimeChunk: false
  }
});
