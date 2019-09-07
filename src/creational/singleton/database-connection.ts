export class DatabaseConnection {

    private static instance: DatabaseConnection;

    private constructor(private instanceCode: number) {}

    static getConnection() {
        if(!this.instance) {
            this.instance = new DatabaseConnection(Math.random());
        }
        return this.instance;
    }

    getIsntanceCode() {
        return this.instanceCode;
    }

}