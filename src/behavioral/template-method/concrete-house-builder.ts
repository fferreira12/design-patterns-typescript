import { HouseBuilder } from "./house-builder";

export class ConcreteHouseBuilder extends HouseBuilder {
    
    constructor(house: any) {
        super(house);
    }
    
    buildFoundation() {
        console.log('Building Concrete foundation');
        this.house.foundation = 'Concrete Foundation'
    }

    buildFloor(): void {
        console.log('Building the Concrete floor');
        this.house.floor = 'Concrete Floor'
    }    

    buildWalls(): void {
        console.log('Building the Concrete walls');
        this.house.walls = 'Concrete Floor'
    }

    buildRoof(): void {
        console.log('Building the Concrete roof');
        this.house.roof = 'Concrete Floor'
    }

}