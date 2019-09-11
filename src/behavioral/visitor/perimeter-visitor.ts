import { GeometryVisitor } from "./geometry-visitor";

export class PerimeterVisitor implements GeometryVisitor {
    getRectangleInfo(rec: import("./rectangle").Rectangle): number {
        return  2 * rec.Height + 2 * rec.Width;
    } 
    getCircleInfo(circ: import("./circle").Circle): number {
        return 2 * Math.PI * circ.Radius;
    }
}
