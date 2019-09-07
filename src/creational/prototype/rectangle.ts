import { Shape } from "./shape"

export class Rectangle extends Shape {
    
    constructor(x: number, y: number, private width: number, private height: number){
        super(x , y);
    }
    
    clone(): Shape {
        return new Rectangle(this.x, this.y, this.width, this.height);
    }

    show() {
        console.log(`Rectangle at ${this.x}, ${this.y} with width ${this.width} and height ${this.height}`);
    }
}