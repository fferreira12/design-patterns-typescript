export interface Database {
    getData(): string[];
    saveData(data: string): void;
}