import { FurnitureFactory } from "./furniture-factory";
import { ModernTable } from "./modern-table";
import { ModernChair } from "./modern-char";

export class ModernFurnitureFactory implements FurnitureFactory {
    createTable() {
        return new ModernTable();
    }
    createChair() {
        return new ModernChair();
    }
}