import { Transport } from "./transport";

export class Truck implements Transport {

    transport(item: string) {
        console.log(`Transporting ${item} by truck`);
    }

}
