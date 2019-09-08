import { ImageFlyweight } from "./image-flyweight";

export class Sprite {
    constructor(public img: ImageFlyweight, public x: number, public y: number) {}
    drawSprite() {
        this.img.drawImage(this.x, this.y);
    }
}