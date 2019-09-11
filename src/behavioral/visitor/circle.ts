import { GeometryVisitor } from "./geometry-visitor";

export class Circle {
    constructor(private radius: number){}

    get Radius() {
        return this.radius;
    }

    set Radius (value: number) {
        this.radius = value;
    }

    accept(visitor: GeometryVisitor) {
        return visitor.getCircleInfo(this);
    }
}
