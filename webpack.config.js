const path = require('path');

module.exports = {
  context: path.resolve(__dirname, 'src'),
  entry: './main.ts',
  output: {
    filename: 'bundle.ts',
    path: path.resolve(__dirname, 'dist')
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  module: {
    rules: [
      {
        test: /\.ts?$/,
        loaders: [
          {
            loader: 'ts-loader',
            options: { configFile: path.resolve(__dirname, 'tsconfig.json') }
          }
        ],
        exclude: /node_modules/
      },
      {
        test: /\.ts$/,
        enforce: 'pre',
        loader: 'tslint-loader',
        exclude: /node_modules/
      },
      {
        test: /\.html$/,
        exclude: path.join(__dirname, './app/app-component.html'),
        use: [{
          loader: 'html-loader'
        }]
      },
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      },
      {
        test: /\.(jpg|png|gif)$/,
        use: [{
          loader: 'file-loader'
        }]
      }
    ]
  }
};
