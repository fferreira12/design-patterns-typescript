import { Chair } from "./chair";
import { Table } from "./table";

export interface FurnitureFactory {
    createChair(): Chair;
    createTable(): Table;
}