import { prisma } from './db';
import { haversine } from './haversine';

export async function isInArea(lat: number, lon: number) {
  const areas = await prisma.area.findMany();
  for (const area of areas) {
    const distance = haversine(lat, lon, area.centerLat, area.centerLon);
    if (distance <= area.radiusM) return { inArea: true, areaId: area.id };
  }
  return { inArea: false };
}
