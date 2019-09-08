import { Database } from "./database";

export class DatabaseService implements Database {
    data: string[] = []
    
    getData() {
        return this.data;
    }

    saveData(data: string) {
        this.data.push(data);
    }
}