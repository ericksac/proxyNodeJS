const Handlers = require('../lib/handler');

module.exports = {
  rutas: [
    {
      method: 'GET',
      path: '/',
      config: {
        handler: Handlers.indexHand,
      },
    },
    {
      method: 'POST',
      path: '/',
      config: {
        handler: Handlers.postHand,
      },
    },
    {
      method: 'POST',
      path: '/Split',
      config: {
        handler: (request, reply) => {
          const parametro = request.payload;
          const splitted = parametro.parametro1.split(' ');

          for (let i = 0; i < splitted.length; i++) {
            console.log(splitted[i]);
          }

          return reply({ parametro });
        },
      },
    },
  ],
};
