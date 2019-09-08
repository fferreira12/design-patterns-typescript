import { Database } from "./database";
import { DatabaseService } from "./database-service";
import { Logger } from "./logger";
import { SecurityProxy } from "./security-proxy";

let database: Database = new DatabaseService();

let dbWithLogger = new Logger(database);

let dbWithSec = new SecurityProxy(dbWithLogger);

//try saving before login
dbWithSec.saveData('a1');

//login
(dbWithSec as SecurityProxy).login('1234');

dbWithSec.saveData('a1');
dbWithSec.saveData('b2');
dbWithSec.saveData('c3');
dbWithSec.saveData('d4');

dbWithSec.getData();
