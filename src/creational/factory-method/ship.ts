import { Transport } from "./transport";

export class Ship implements Transport {

    transport(item: string) {
        console.log(`Transporting ${item} by ship`);
    }

}
