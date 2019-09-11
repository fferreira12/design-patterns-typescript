import { GeometryVisitor } from "./geometry-visitor";

export class Rectangle {
    constructor(private width: number, private height: number) {}

    get Width() {
        return this.width;
    }

    set Width (value: number) {
        this.width = value;
    }

    get Height() {
        return this.height;
    }

    set Height (value: number) {
        this.height = value;
    }

    accept(visitor: GeometryVisitor) {
        return visitor.getRectangleInfo(this);
    }
}
