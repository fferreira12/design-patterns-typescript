import { BaseHandler } from "./base-handler";

export class LoggerHandler extends BaseHandler {
    
    handle(request: any) {
        console.log('A request was made at ' + Date.now());
        if(this.next) {
            this.next.handle(request);
        }
    }
}