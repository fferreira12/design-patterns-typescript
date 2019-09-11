import { HouseBuilder } from "./house-builder";
import { WoodenHouseBuilder } from "./wooden-house-builder";
import { ConcreteHouseBuilder } from "./concrete-house-builder";

let house = {};

let builder: HouseBuilder = new WoodenHouseBuilder(house);

builder.buildHouse();

console.log(house);

builder = new ConcreteHouseBuilder(house);

builder.buildHouse();

console.log(house);
