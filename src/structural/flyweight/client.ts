import { FlyweightFactory } from "./flyweight-factory";
import { ImageFlyweight } from "./image-flyweight";
import { Context } from "./context";

let fac = new FlyweightFactory();

let context = new Context(fac);

for (let i = 0; i < 10; i++) {
    context.addSprite('/bullet', i, i);
    context.addSprite('/box', i, i);
    context.addSprite('/tree', i, i);
    context.addSprite('/leaf', i, i);
}

context.showSprites();

console.log('Total sprites: ' + context.getQuantityOfSprites());
console.log('Total flyweights: ' + fac.getTotalOfFlyweights());
