import { Subscriber } from "./subscriber";

export class Emailer implements Subscriber {
    update(data: string) {
        console.log('Sending email: ' + data);
    }
}