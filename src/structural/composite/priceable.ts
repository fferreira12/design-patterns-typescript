export interface Priceable {
    getPrice(): number;
    getQuantityOfItems(): number;
    getQuantityOfBoxes(): number;
}