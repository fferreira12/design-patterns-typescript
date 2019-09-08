import { Database } from "./database";

export class Logger implements Database {
    
    constructor(private service: Database){}
    
    getData(): string[] {
        console.log('getData was called at ' + Date.now());
        return this.service.getData();
    }    
    saveData(data: string): void {
        console.log('saveData was called at ' + Date.now() + ' with argument ' + data);
        this.service.saveData(data);
    }


}