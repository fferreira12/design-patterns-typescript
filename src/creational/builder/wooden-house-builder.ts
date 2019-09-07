import { HouseBuilder } from "./house-builder";
import { House } from "./house";

export class WoodenHouseBuilder extends HouseBuilder {
    

    house: House;

    constructor() {
        super();
        this.house = new House();
    }

    reset() {
        this.house = new House();
    }

    createFoundation(): void {
        this.house.foundation = "Wooden Foundation";
    }
    createFloor(): void {
        this.house.floor = "Wooden Floor";
    }
    createWalls(): void {
        this.house.walls = "Wooden walls";
    }
    createRoof(): void {
        this.house.roof = "Wooden roof";
    }

}