import { TransportCreator } from "./transport-creator";
import { Transport } from "./transport";
import { Truck } from "./truck";


export class TruckCreator implements TransportCreator {
    createTransport(): Transport {
        return new Truck();
    }
}