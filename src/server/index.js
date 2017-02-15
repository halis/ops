
const setupServer = require('./setup');
const startServer = require('./start');
const handleShutdown = require('./shutdown');

const NODE_PORT = process.env.NODE_PORT || 3000;

const app = setupServer();
const server = startServer(app, NODE_PORT);

handleShutdown(server, NODE_PORT);
