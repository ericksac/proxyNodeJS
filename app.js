require('dotenv').config();

const hapi = require('hapi');

const Routes = require('./routes/routes');

const server = new hapi.Server();

// server.register([Routes]);
server.connection({
  port: 9090,
});

server.route(Routes.rutas);

server.start((err) => {
  if (err) throw err;
  console.log(`Servidor levantado en: ${server.info.uri}`);
});
