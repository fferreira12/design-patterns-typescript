import { Transport } from "./transport";

export interface TransportCreator {
    createTransport(): Transport;
}