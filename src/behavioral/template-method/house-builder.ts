export abstract class HouseBuilder {
    constructor(protected house?: any){}
    
    buildHouse(): void {
        this.buildFoundation();
        this.buildFloor();
        this.buildWalls();
        this.buildRoof();
    }

    buildFoundation(): void {
        console.log('Building common foundation');
        this.house.foundation = 'Common Foundation'
    }
    abstract buildFloor(): void;
    abstract buildWalls(): void;
    abstract buildRoof(): void;

    getHouse(): any {
        return this.house;
    }
}