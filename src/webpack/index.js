
const getEnvironment = require('./env');
const getEntry = require('./entry');
const getOutput = require('./output');
const getPlugins = require('./plugins');
const getModule = require('./module');
const getResolve = require('./resolve');

const env = getEnvironment();

const opts = {
  entry: getEntry(),
  output: getOutput(env.NODE_MINIFY),
  plugins: getPlugins(env),
  module: getModule(),
  resolve: getResolve(),
  externals: [],
};

if (env.NODE_SOURCE_MAPS) {
  opts.devtool = 'source-map';
}

module.exports = opts;
