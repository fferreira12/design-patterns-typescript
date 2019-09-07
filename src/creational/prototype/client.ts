import { Shape } from "./shape";
import { Rectangle } from "./rectangle";
import { Circle } from "./circle";

let small: Shape = new Rectangle(0,0,1,1);
let big: Shape = new Circle(0,0,10);

let buildings: Shape[] = [];

for (let i = 0; i < 10; i++) {
    let r = small.clone();
    let c = big.clone();
    r.changeLocation(i, i);
    c.changeLocation(i+1, i+1);
    buildings.push(r);
    buildings.push(c);
}

buildings.forEach(shape => {
    shape.show();
});