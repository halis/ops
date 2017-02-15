
const path = require('path');

const entry = path.join(__dirname, '../../src/ui/index');

module.exports = () => ['babel-polyfill', entry];
