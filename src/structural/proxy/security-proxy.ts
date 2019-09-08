import { Database } from "./database";

export class SecurityProxy implements Database {
    loggedIn = false;
    
    constructor(private service: Database){}
    
    getData(): string[] {
        if(this.loggedIn){
            return this.service.getData();
        } else {
            console.log('Must login before accessing data');
            return [];            
        }
    }    
    saveData(data: string): void {
        if(this.loggedIn){
            this.service.saveData(data);
        } else {
            console.log('Must login before saving data');
        }
    }

    login(password: string) {
        if(password === '1234') {
            this.loggedIn = true;
        }
    }

}