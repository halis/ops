
const chalk = require('chalk');

module.exports = () => {
  const env = {
    NODE_ENV: process.env.NODE_ENV || 'development',
    NODE_MINIFY: process.env.NODE_MINIFY == null ? false : true,
    NODE_SOURCE_MAPS: process.env.NODE_SOURCE_MAPS == null ? false : true
  };

  const pretty = any => JSON.stringify(any, null, 2);
  const prettyPrint = any => console.info(`${chalk.cyan.bold(pretty(any))}\n`);
  prettyPrint(env);

  return env;
};
