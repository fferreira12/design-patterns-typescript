import { House } from "./house";

export abstract class HouseBuilder {
    house!: House;
    
    abstract reset(): void;
    abstract createFoundation(): void;
    abstract createFloor(): void;
    abstract createWalls(): void;
    abstract createRoof(): void;
    getResult(): House {
        return this.house;
    }
}