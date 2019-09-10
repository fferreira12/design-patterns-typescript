import { Subscriber } from "./subscriber";

export class Publisher {

    subscribers: Subscriber[] = [];

    subscribe(subscriber: Subscriber) {
        this.subscribers.push(subscriber);
    }

    unsubscribe(subscriber: Subscriber) {
        this.subscribers.splice(this.subscribers.indexOf(subscriber), 1);
    }

    notify(data: string) {
        this.subscribers.forEach(s => {
            s.update(data);
        });
    }
}