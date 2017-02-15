
const express = require('express');
const compression = require('compression');
const path = require('path');

const setupPublic = require('./public');
const setupSpa = require('./spa');

const PUBLIC_DIR = path.join(__dirname, '../../public');

module.exports = () => {
  const app = express();

  app.use(compression());
  setupPublic(app, PUBLIC_DIR);
  setupSpa(app, PUBLIC_DIR);

  return app;
};
