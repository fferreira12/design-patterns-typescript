import { Rectangle } from "./rectangle";
import { Circle } from "./circle";

export interface GeometryVisitor {
    getRectangleInfo(rec: Rectangle): number;
    getCircleInfo(circ: Circle): number;
}
