import { describe, it, expect } from 'vitest';
import { haversine } from '../src/lib/haversine';

describe('haversine', () => {
  it('computes zero distance for same point', () => {
    expect(haversine(35, 139, 35, 139)).toBe(0);
  });

  it('computes known distance', () => {
    const dist = haversine(0, 0, 0, 1);
    expect(Math.round(dist)).toBe(111195);
  });
});
