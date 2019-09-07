import { FurnitureFactory } from "./furniture-factory";
import { VictorianChair } from "./victorian-chair";
import { VictorianTable } from "./victorian-table";

export class VictorianFurnitureFactory implements FurnitureFactory {
    createChair() {
        return new VictorianChair();
    }
    createTable() {
        return new VictorianTable();
    }
}