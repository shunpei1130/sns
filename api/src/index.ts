import Fastify from 'fastify';
import { presenceRoutes } from './routes/presence';

export async function buildServer() {
  const app = Fastify({ logger: true });
  app.register(presenceRoutes);
  return app;
}

if (import.meta.url === `file://${process.argv[1]}`) {
  const server = await buildServer();
  server.listen({ port: Number(process.env.PORT) || 8080, host: '0.0.0.0' }, err => {
    if (err) {
      server.log.error(err);
      process.exit(1);
    }
  });
}
