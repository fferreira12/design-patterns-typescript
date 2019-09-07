import { FurnitureFactory } from "./furniture-factory";
import { VictorianFurnitureFactory } from "./victorian-furniture-factory";
import { Chair } from "./chair";
import { Table } from "./table";
import { ModernFurnitureFactory } from "./modern-furniture-factory";

function createAndUseFurniture(fac: FurnitureFactory) {
    let chair: Chair = fac.createChair();
    let table: Table = fac.createTable();

    chair.sit();
    table.use();
}

let factory: FurnitureFactory = new VictorianFurnitureFactory();

createAndUseFurniture(factory);

factory = new ModernFurnitureFactory();

createAndUseFurniture(factory);
