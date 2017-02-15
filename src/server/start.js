
const chalk = require('chalk');

const good = string => console.info(chalk.green(string));

module.exports = (app, port) => app.listen(port, (error) => {
  if (error) {
    console.error(error);
  } else {
    good(`Express is listening on http://localhost:${port}\n`);
  }
});
