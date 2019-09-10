import { Subscriber } from "./subscriber";

export class Logger implements Subscriber {
    update(data: string) {
        console.log('Logging: ' + data);
    }
}