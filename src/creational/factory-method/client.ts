import { TransportCreator } from "./transport-creator";
import { Transport } from './transport';
import { TruckCreator } from "./truck-creator";
import { ShipCreator } from "./ship-creator";

let factory: TransportCreator = new TruckCreator();

let transport: Transport = factory.createTransport();

transport.transport("Item 1");

factory = new ShipCreator();

transport = factory.createTransport();

transport.transport("Item 2");
