const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  entry: './server/index.js',
  target: 'node',
  externals: [nodeExternals()],
  output: {
    path: path.resolve(__dirname, 'server-build'), // Utilisation de `__dirname` pour obtenir le répertoire actuel
    filename: 'index.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/ // Vous pouvez exclure les fichiers de node_modules pour accélérer la compilation
      }
    ]
  }
};