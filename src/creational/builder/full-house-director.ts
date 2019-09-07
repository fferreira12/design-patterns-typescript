import { HouseBuilder } from "./house-builder";

export class FullHouseDirector {
    constructor(private builder: HouseBuilder) {}

    changeBuilder(builder: HouseBuilder) {
        this.builder = builder;
    }

    build() {
        this.builder.createFoundation();
        this.builder.createFloor();
        this.builder.createWalls();
        this.builder.createRoof();
    }
}