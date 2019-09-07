import { DatabaseConnection } from "./database-connection";

let conn1 = DatabaseConnection.getConnection();

let conn2 = DatabaseConnection.getConnection();

console.log(`conn1 code: ${conn1.getIsntanceCode()}`);
console.log(`conn2 code: ${conn2.getIsntanceCode()}`);
