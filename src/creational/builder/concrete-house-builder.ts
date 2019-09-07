import { HouseBuilder } from "./house-builder";
import { House } from "./house";

export class ConcreteHouseBuilder extends HouseBuilder {
    

    house: House;

    constructor() {
        super();
        this.house = new House();
    }

    reset() {
        this.house = new House();
    }

    createFoundation(): void {
        this.house.foundation = "Concrete Foundation";
    }
    createFloor(): void {
        this.house.floor = "Concrete Floor";
    }
    createWalls(): void {
        this.house.walls = "Concrete walls";
    }
    createRoof(): void {
        this.house.roof = "Concrete roof";
    }

}