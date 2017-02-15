
/* eslint prefer-const: off */

const path = require('path');

module.exports = (env) => {
  const outputPath = path.join(__dirname, '../../public/');
  const filename = env.NODE_MINIFY ? '/js/bundle.min.js' : '/js/bundle.js';

  let output = {
    path: outputPath,
    filename,
  };
  if (env.NODE_SOURCE_MAPS) {
    output.sourceMapFilename = env.NODE_MINIFY ? '/js/bundle.min.js.map' : '/js/bundle.js.map';
  }

  return output;
};
