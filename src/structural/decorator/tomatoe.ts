import { PizzaDecorator } from "./pizza-decorator";

export class Tomatoe extends PizzaDecorator {
    
    getPrice(): number {
        return 1.5 + this.wrappee.getPrice();
    }    
    getDescription(): string {
        return 'Tomatoe ' + this.wrappee.getDescription();
    }
}