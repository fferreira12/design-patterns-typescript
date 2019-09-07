import { Table } from "./table";

export class ModernTable implements Table {
    use() {
        console.log('Using a Modern Table');
    }
}