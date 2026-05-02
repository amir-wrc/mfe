const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

  remotes: {
    "todoApp": "http://localhost:4201/remoteEntry.js",
    "shoppingCartApp": "http://localhost:4202/remoteEntry.js",
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' })
  },

  sharedMappings: [],
  
}, {
  output: {
    uniqueName: 'shellApp',
    publicPath: 'auto'
  },
  optimization: {
    runtimeChunk: false
  }
});
