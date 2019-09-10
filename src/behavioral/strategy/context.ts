import { OrderingStrategy } from "./ordering-strategy";

export class Context {
    constructor(private numbers: number[], private strategy: OrderingStrategy){}

    setStrategy(strategy: OrderingStrategy) {
        this.strategy = strategy;
    }
    
    order() {
        return this.strategy.order(this.numbers);
    }
}