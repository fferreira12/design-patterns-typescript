import DatabaseService from "./database-service"
import { SaveCommand } from "./save-command";

let data = {
    firstName: 'Fernando',
    lastName: 'Ferreira',
    age: 27,
    city: 'Brasília'
}

let db = new DatabaseService();

let save = new SaveCommand(db);

save.setData(data);

save.execute();