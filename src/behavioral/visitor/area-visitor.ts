import { GeometryVisitor } from "./geometry-visitor";

export class AreaVisitor implements GeometryVisitor {
    getRectangleInfo(rec: import("./rectangle").Rectangle): number {
        return rec.Height * rec.Width;
    } 
    getCircleInfo(circ: import("./circle").Circle): number {
        let radius = Math.PI * (circ.Radius * circ.Radius);
        return radius;
    }

}
