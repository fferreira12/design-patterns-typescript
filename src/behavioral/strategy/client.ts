import { Context } from "./context";
import { CrescentStrategy } from "./crescent-strategy";
import { ReverseStrategy } from "./reverse-strategy";

let numbers = [5,8,9,1,0,25,49,1,3,5,7,89];

let strat1 = new CrescentStrategy();
let strat2 = new ReverseStrategy();

let context = new Context(numbers, strat1);

console.log('Strategy 1: ');
context.order().forEach(element => {
    console.log(element);
});

console.log('Strategy 2: ');
context.setStrategy(strat2)
context.order().forEach(element => {
    console.log(element);
});
