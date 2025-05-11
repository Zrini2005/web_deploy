declare class Grad {
    readonly x: number;
    readonly y: number;
    readonly z: number;
    constructor(x: number, y: number, z: number);
    dot2(x: number, y: number): number;
    dot3(x: number, y: number, z: number): number;
}
interface PeakPoint {
    x: number;
    y: number;
    intensity: number;
    falloffRadius: number;
}
declare class Perlin {
    readonly permutationTable: number[];
    readonly grad3: Grad[];
    readonly perm: number[];
    readonly gradP: Grad[];
    private peakPoints;
    readonly F2: number;
    readonly G2: number;
    readonly F3: number;
    readonly G3: number;
    constructor(seed?: number, peakPoints?: PeakPoint[]);
    simplex2(xin: number, yin: number): number;
    simplex3(xin: number, yin: number, zin: number): number;
    private fade;
    private lerp;
    private calculatePeakInfluence;
    perlin2(x: number, y: number): number;
    addPeakPoint(x: number, y: number, intensity: number, falloffRadius: number): void;
    clearPeakPoints(): void;
}
export default Perlin;
