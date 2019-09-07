import { HouseBuilder } from "./house-builder";
import { WoodenHouseBuilder } from "./wooden-house-builder";
import { FullHouseDirector } from "./full-house-director";
import { House } from "./house";
import { ConcreteHouseBuilder } from "./concrete-house-builder";

function buildAndShow(builder: HouseBuilder, director: FullHouseDirector) {
    director.changeBuilder(builder);
    director.build();
    let house = builder.getResult();
    house.showHouse();
}

let builder: HouseBuilder = new WoodenHouseBuilder();

let director = new FullHouseDirector(builder);

buildAndShow(builder, director);

buildAndShow(new ConcreteHouseBuilder(), director);