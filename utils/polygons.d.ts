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
export declare class Polygons {
    private readonly SEED;
    private readonly GRIDSIZE;
    private readonly JITTER;
    points: PolygonVertices[];
    voronoi: any;
    polygonData: PolygonData[];
    private deterministicRng;
    private walkerIndices;
    constructor(seed: string);
    private initializePoints;
    private initializeVoronoi;
    randomWalkGen(): number[];
    calculatePolygonData(): void;
    getWorldBounds(): {
        x: any;
        y: any;
        width: number;
        height: number;
    };
    private calculateCentroid;
    private addPolygonIndices;
    private calculateReducedVertices;
    private calculateGradientAreaCoordinates;
    private calculateOuterBorder;
    private calculateLootboxCoordinates;
    private calculateScaledVertices;
}
export {};
