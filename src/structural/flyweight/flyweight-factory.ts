import { ImageFlyweight } from "./image-flyweight";

export class FlyweightFactory {
    cache: ImageFlyweight[] = [];
    getFlyweight(imgLocation: string): ImageFlyweight {
        let found = this.cache.find(imgFlyweight => {
            return imgFlyweight.getImgLocation() == imgLocation;
        });
        if(!found) {
            let imgFlyweight = new ImageFlyweight(imgLocation)
            this.cache.push(imgFlyweight);
            return imgFlyweight;
        } else {
            return found;
        }
    }
    getTotalOfFlyweights() {
        return this.cache.length;
    }
}