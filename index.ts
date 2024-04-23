import fastify from 'fastify';
import type { FastifyInstance } from 'fastify';
import path from 'path';
import Brasil from './utils/estados';

const app: FastifyInstance = fastify();

app.get('/', async (request, reply) => {
    try {
      reply.redirect('/estados');
    } catch (error) {
      console.log('Error:', error);
      reply.code(500).send({ error });
    }
});

app.get('/estados', async (request, reply) => {
  try {
    const databasePath = path.join(__dirname, 'database.json');
    const json = require(databasePath);
    return json;
  } catch (error) {
    console.log('Error:', error);
    reply.code(500).send({ error });
  }
});

const start = async () => {
  try {
    await app.listen( { port:3000 } );
    console.log('Server listening on port 3000');
  } catch (err) {
    console.error('Error starting server:', err);
    process.exit(1);
  }
};

start();

module.exports = {
    Brasil
}