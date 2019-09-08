export class ImageFlyweight {
    constructor(private imgLocation: string){}
    getImgLocation() {
        return this.imgLocation;
    }
    drawImage(x: number, y: number) {
        console.log('Drawing ' + this.imgLocation + ' at (' + x + ', ' + y + ')');
    }
}