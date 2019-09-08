import { PizzaDecorator } from "./pizza-decorator";

export class Mozarella extends PizzaDecorator {
    
    getPrice(): number {
        return 2.5 + this.wrappee.getPrice();
    }    
    getDescription(): string {
        return 'Mozzarella ' + this.wrappee.getDescription();
    }
}