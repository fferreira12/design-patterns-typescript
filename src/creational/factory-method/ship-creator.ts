import { TransportCreator } from "./transport-creator";
import { Transport } from "./transport";
import { Ship } from "./ship";


export class ShipCreator implements TransportCreator {
    createTransport(): Transport {
        return new Ship();
    }
}