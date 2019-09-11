import { Rectangle } from "./rectangle";
import { Circle } from "./circle";
import { AreaVisitor } from "./area-visitor";
import { PerimeterVisitor } from "./perimeter-visitor";

let rec: Rectangle = new Rectangle(10,20);

let circ: Circle = new Circle(10);

let area = new AreaVisitor();
let perimeter = new PerimeterVisitor()

console.log('Rectangle Area: ' + rec.accept(area));
console.log('Circle Area: ' + circ.accept(area));
console.log('Rectangle Perimeter: ' + rec.accept(perimeter));
console.log('Circle Perimeter: ' + circ.accept(perimeter));
