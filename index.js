const config = require("./config");
const server = require('./server');

server.listen(config.port, () => console.log(
  `🚀 Server ready at http://localhost:${config.port}/api`,
));