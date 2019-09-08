import { Priceable } from "./priceable";

export class Box implements Priceable {

    items: Priceable[] = [];
    public static boxes: number = 0;

    constructor(){
        Box.boxes++;
    }

    addItem(item: Priceable) {
        this.items.push(item);
    }

    getPrice() {
        let price = 0;
        this.items.forEach(item => {
            price += item.getPrice();
        });
        return price;
    }

    getQuantityOfItems() {
        return this.items.reduce((total, currentValue) => {
            return total + currentValue.getQuantityOfItems();
        }, 0)
    }

    getQuantityOfBoxes() {
        let boxes: number = 1;
        this.items.map(item => {
            boxes += item.getQuantityOfBoxes();
        });
        return boxes;
    }

}