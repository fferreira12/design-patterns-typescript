import { Clonable } from "./clonable";

export abstract class Shape implements Clonable<Shape> {

    constructor(protected x: number, protected y: number) {}

    abstract clone(): Shape;
    abstract show(): void;
    
    changeLocation(x: number, y: number) {
        this.x = x;
        this.y = y;
    }
}