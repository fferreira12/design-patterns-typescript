import { Pizza } from "./pizza";

export abstract class PizzaDecorator implements Pizza {
    
    constructor(protected wrappee: Pizza){}

    abstract getPrice(): number;
    abstract getDescription(): string;
    setWrappee(wrappee: Pizza) {
        this.wrappee = wrappee;
    }
}