import { Pizza } from "./pizza";

export class BasePizza implements Pizza{
    getPrice(): number {
        return 10;
    }    
    getDescription(): string {
        return 'Pizza';
    }
}