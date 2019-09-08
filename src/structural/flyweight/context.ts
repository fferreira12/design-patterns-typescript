import { Sprite } from "./sprite";
import { FlyweightFactory } from "./flyweight-factory";

export class Context {

    sprites: Sprite[] = [];

    constructor(private factory: FlyweightFactory) {}

    addSprite(imgLocation: string, x: number, y: number) {
        this.sprites.push(new Sprite(this.factory.getFlyweight(imgLocation), x, y));
    }

    showSprites() {
        this.sprites.forEach(s => s.drawSprite());
    }

    getQuantityOfSprites() {
        return this.sprites.length;
    }

}