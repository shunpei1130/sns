import { FastifyInstance } from 'fastify';
import { prisma } from '../lib/db';
import { isInArea } from '../lib/geo';

export async function presenceRoutes(app: FastifyInstance) {
  app.post('/presence/ping', async (req, res) => {
    const { lat, lon, userId } = req.body as any;
    const { inArea, areaId } = await isInArea(lat, lon);
    if (inArea && areaId) {
      await prisma.presence.upsert({
        where: { userId_areaId: { userId, areaId } },
        update: { lastPing: new Date(), exitedAt: null },
        create: { userId, areaId },
      });
    }
    return { inArea };
  });
}
