
module.exports = () => ({
  loaders: [
    {
      exclude: [/node_modules/, /\.test\.jsx?$/],
      loaders: ['babel?presets[]=react,presets[]=es2015'],
      test: /\.jsx?$/,
    },
  ],
});
