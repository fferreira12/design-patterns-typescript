import { Database } from "./database";

//mock db
export default class DatabaseService implements Database {
    data: any;
    save(data: any): void {
        console.log('Saving data');
        this.data = data;
    }
    retrieve() {
        console.log('Getting data');
        return this.data;
    }
}
