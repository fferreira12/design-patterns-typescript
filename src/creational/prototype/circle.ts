import { Shape } from "./shape";

export class Circle extends Shape {
    
    constructor(x: number, y: number, private radius: number) {
        super(x, y);
    }
    
    clone(): Shape {
        return new Circle(this.x, this.y, this.radius);
    }
    
    show() {
        console.log(`Circle at ${this.x}, ${this.y} with radius ${this.radius}`);
    }
}
