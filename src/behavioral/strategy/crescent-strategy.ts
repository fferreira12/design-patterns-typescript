import { OrderingStrategy } from "./ordering-strategy";

export class CrescentStrategy implements OrderingStrategy {
    order(items: number[]): number[] {
        return items.sort( (a,b) => {
            return a - b;
        });
    }
}