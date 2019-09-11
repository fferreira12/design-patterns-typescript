import { HouseBuilder } from "./house-builder";

export class WoodenHouseBuilder extends HouseBuilder {
    
    constructor(house: any) {
        super(house);
    }
    
    buildFoundation() {
        console.log('Building wooden foundation');
        this.house.foundation = 'Wooden Foundation'
    }

    buildFloor(): void {
        console.log('Building the wooden floor');
        this.house.floor = 'Wooden Floor'
    }    

    buildWalls(): void {
        console.log('Building the wooden walls');
        this.house.walls = 'Wooden Floor'
    }

    buildRoof(): void {
        console.log('Building the wooden roof');
        this.house.roof = 'Wooden Floor'
    }

}