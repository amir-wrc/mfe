const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

  name: 'todoApp',

  exposes: {
    './Module': './src/app/todo/todo.module.ts',
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' })
  },

  sharedMappings: [],
  
}, {
  output: {
    uniqueName: 'todoApp',
    publicPath: 'auto'
  },
  optimization: {
    runtimeChunk: false
  }
});
