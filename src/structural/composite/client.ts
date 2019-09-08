import { Priceable } from "./priceable";
import { Box } from "./box";
import { Product } from "./product";

let box: Box = new Box();

for (let i = 0; i < 10; i++) {
    let addBox: boolean = Math.random() < 0.5;
    if(addBox) {
        let b = new Box();
        b.addItem(new Product('Embedded product', Math.random() * 10));
        box.addItem(b);
    } else {
        box.addItem(new Product("Sample Product", Math.random() * 20));
    }
}

console.log('Total price is ' + box.getPrice() + ' for ' + box.getQuantityOfItems() + ' items and ' + box.getQuantityOfBoxes() + ' boxes');
console.log('Box static counter = ' + Box.boxes);
