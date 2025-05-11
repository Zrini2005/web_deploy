import Prando from 'prando'

export function dungeonChunkCoordinates(centroid: { x: number, y: number }, chunkSize: number, tileSize: number, seed: string) {
  const rng = new Prando(seed)
  const xDisplacement = rng.nextInt(-1, 1);
  const yDisplacement = rng.nextInt(-1, 1);

  var x = (chunkSize * tileSize) * Math.round((centroid.x + xDisplacement) / (chunkSize * tileSize));
  var y = (chunkSize * tileSize) * Math.round((centroid.y + yDisplacement) / (chunkSize * tileSize));

  x = x / chunkSize/tileSize;
  y = y / chunkSize/tileSize;

  return { x, y }
}
