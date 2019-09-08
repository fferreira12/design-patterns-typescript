import { Priceable } from "./priceable";

export class Product implements Priceable {
    
    constructor(public name: string, private price: number) {}

    getPrice(): number {
        return this.price;
    }

    getQuantityOfItems() {
        return 1;
    }

    getQuantityOfBoxes() {
        return 0;
    }

}