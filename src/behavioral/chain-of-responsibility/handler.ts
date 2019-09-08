export interface Handler {
    setNext(handler: Handler): void;
    handle(request: any): any;
}