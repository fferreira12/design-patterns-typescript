import { PizzaDecorator } from "./pizza-decorator";

export class Bacon extends PizzaDecorator {
    
    getPrice(): number {
        return 4 + this.wrappee.getPrice();
    }    
    getDescription(): string {
        return 'Bacon ' + this.wrappee.getDescription();
    }
}