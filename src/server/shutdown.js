
const chalk = require('chalk');
const curry = require('ramda').curry;

const log = curry((color, string) => console.info(color(string)));

const good = log(chalk.green);
const info = log(chalk.cyan);
const warn = log(chalk.magenta);
const bad = log(chalk.red.bold);

module.exports = (server, port) => {
  const resolve = (signal) => {
    info('\n');
    info(`Signal ${signal} received`);
    info(`Express is shutting down on http://localhost:${port}`);

    server.close();
    good('\nThe server shutdown gracefully');
  };
  const reject = (signal, error) => {
    warn('\nThe server did NOT shutdown gracefully\n');
    bad(error);
  };

  const shutdown = (signal) => {
    try {
      resolve(signal);
      process.exit(0);
    } catch (error) {
      reject(signal, error);
      process.exit(-1);
    }
  };

  const signals = ['SIGTERM', 'SIGHUP', 'SIGINT'];
  signals.forEach(signal => process.on(signal, () => shutdown(signal)));
};
