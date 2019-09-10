import { OrderingStrategy } from "./ordering-strategy";

export class ReverseStrategy implements OrderingStrategy {
    order(items: number[]): number[] {
        return items.sort( (a,b) => {
            return b - a;
        });
    }
}