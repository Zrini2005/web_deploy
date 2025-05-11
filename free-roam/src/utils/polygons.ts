import { Delaunay } from 'd3-delaunay';
import Prando from 'prando';

interface PolygonVertices {
  x: number;
  y: number;
}

interface PolygonData {
  index: number;
  polygonIndex: number;
  vertices: PolygonVertices[];
  reducedVertices: PolygonVertices[];
  lootBoxesCoordinates: PolygonVertices[];
  gradientAreaCoordinates: PolygonVertices[];
  outerBorderCoordinates: PolygonVertices[];
  centroid: PolygonVertices;
}

export class Polygons {
  private readonly SEED: string;
  private readonly GRIDSIZE: number = 7;
  private readonly JITTER: number = 0.6;
  
  public points: PolygonVertices[] = [];
  public voronoi: any;
  public polygonData: PolygonData[] = [];
  private deterministicRng: Prando;
  private walkerIndices: number[] | undefined = undefined;
  
  constructor(seed : string) {
    this.SEED = seed;
    this.deterministicRng = new Prando(this.SEED);
    this.initializePoints();
    this.initializeVoronoi();
  }

  private initializePoints(): void {
    for (let x = 1; x <= this.GRIDSIZE; x++) {
      for (let y = 1; y <= this.GRIDSIZE; y++) {
        this.points.push({
          x: x + this.JITTER * (this.deterministicRng.next() - this.deterministicRng.next()),
          y: y + this.JITTER * (this.deterministicRng.next() - this.deterministicRng.next())
        });
      }
    }
  }

  private initializeVoronoi(): void {
    const delaunay = Delaunay.from(this.points, loc => loc.x, loc => loc.y);
    this.voronoi = delaunay.voronoi([0, 0, this.GRIDSIZE, this.GRIDSIZE]);
  }

  public randomWalkGen(): number[] {
    let randomWalkRng = new Prando(this.SEED);
    let walker: number[] = [24];
    const visited = new Set<number>([24]);
    const directions = [-1, 1, -7, 7];
    
    const within6x6Bounds = (i: number): boolean => {
      return i % 7 !== 0 && i % 7 !== 6 && i > 6 && i < 42;
    };

    let k = 0;
    let indexTracker = 0;

    while (walker.length < 20) {
      const currentInd = walker[indexTracker];
      let availableDirs = directions.filter(dir => {
        const next = currentInd + dir;
        return within6x6Bounds(next) && !visited.has(next);
      });

      if (availableDirs.length > 0) {
        const dir = availableDirs[randomWalkRng.nextInt(0, availableDirs.length - 1)];
        const next = currentInd + dir;
        walker.push(next);
        visited.add(next);
        indexTracker = walker.length - 1;
      } else {
        if (indexTracker === 1) {
          indexTracker = randomWalkRng.nextInt(0, walker.length - 1);
        }
        indexTracker--;
      }

      k++;
      if (k > 200) {
        throw new Error("Random walker error: Infinite loop");
      }
    }
    return walker;
  }

  public calculatePolygonData(): void {
    const polygonArray: Array<Array<[number, number]>> = Array.from(this.voronoi.cellPolygons());
    const indices = this.randomWalkGen();

    for (let i in indices) {
      const index = indices[i];
      let vertices = [];
      
      for (let j = 0; j < (polygonArray[index] as Array<[number, number]>).length; j++) {
        vertices.push({ 
          x: Number(polygonArray[index][j][0]), 
          y: Number(polygonArray[index][j][1]) 
        });
      }
      
      const centroid = this.calculateCentroid(vertices);
      this.polygonData.push({
        index: Number(i),
        polygonIndex: 0,
        vertices: vertices,
        reducedVertices: [],
        lootBoxesCoordinates: [],
        gradientAreaCoordinates: [],
        outerBorderCoordinates: [],
        centroid: centroid
      });
    }

    this.addPolygonIndices(indices);
    this.calculateReducedVertices();
    this.calculateLootboxCoordinates();
    this.calculateGradientAreaCoordinates();
    this.calculateOuterBorder();
  }

  public getWorldBounds() {
    const indices = this.walkerIndices ?? this.randomWalkGen();
    let topmost, bottommost, leftmost, rightmost;

    // Initialize with the first matching polygon's first vertex
    const firstMatch = this.polygonData.find(polygon => indices.includes(polygon.index));
    if (!firstMatch) return null;

    topmost = bottommost = leftmost = rightmost = firstMatch.vertices[0];

    // Now check all matching polygons
    for (let polygon of this.polygonData) {
      if (indices.includes(polygon.index)) {  // Changed some() to includes() for clarity
        for (const vertex of polygon.vertices) {
          if (vertex.y < topmost.y) topmost = vertex;
          if (vertex.y > bottommost.y) bottommost = vertex;
          if (vertex.x < leftmost.x) leftmost = vertex;
          if (vertex.x > rightmost.x) rightmost = vertex;
        }
      }
    }

    return {
      x: leftmost.x,
      y: topmost.y,
      width: rightmost.x - leftmost.x,
      height: bottommost.y - topmost.y
    };
  }
  private calculateCentroid(vertices: PolygonVertices[]): PolygonVertices {
    let centroid = { x: 0, y: 0 };
    for (const vertex of vertices) {
      centroid.x += Number(vertex.x);
      centroid.y += Number(vertex.y);
    }
    centroid.x /= vertices.length;
    centroid.y /= vertices.length;
    return centroid;
  }

  private addPolygonIndices(indices: number[]): void {
    for (let i = 0; i < this.polygonData.length; i++) {
      this.polygonData[i].polygonIndex = indices[i];
    }
  }

  private calculateReducedVertices(): void {
    for (const polygon of this.polygonData) {
      let reducedVertices = this.calculateScaledVertices(polygon.vertices, 0.75);
      polygon.reducedVertices = reducedVertices;
    }
  }

  private calculateGradientAreaCoordinates(): void {
    for (const polygon of this.polygonData) {
      let gradientAreaCoordinates = this.calculateScaledVertices(polygon.vertices, 0.80);
      polygon.gradientAreaCoordinates = gradientAreaCoordinates;
    }
  }

  private calculateOuterBorder(): void {
    for (const polygon of this.polygonData) {
      let outerBorderCoordinates = this.calculateScaledVertices(polygon.vertices, 0.83);
      polygon.outerBorderCoordinates = outerBorderCoordinates;
    }
  }

  private calculateLootboxCoordinates(): void {
    for (let i = 1; i < this.polygonData.length; i++) {
      let lootboxCoordinates = this.calculateScaledVertices(this.polygonData[i].vertices, 0.3);
      this.polygonData[i].lootBoxesCoordinates = lootboxCoordinates;
    }
  }

  private calculateScaledVertices(vertices: PolygonVertices[], scale: number): PolygonVertices[] {
    const centroid = this.calculateCentroid(vertices);
    return vertices.map(vertex => ({
      x: centroid.x + (vertex.x - centroid.x) * scale,
      y: centroid.y + (vertex.y - centroid.y) * scale
    }));
  }
}