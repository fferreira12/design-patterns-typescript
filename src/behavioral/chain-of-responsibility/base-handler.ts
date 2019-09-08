import { Handler } from "./handler";

export abstract class BaseHandler implements Handler{
    constructor(protected next?: Handler){}

    setNext(handler: Handler): void {
        this.next = handler;
    }
    abstract handle(request: any): any;
}