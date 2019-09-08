import { BaseHandler } from "./base-handler";

export class AuthHandler extends BaseHandler {
    
    handle(request: any) {
        if(!request.user) {
            console.log('Must be logged in to make requests');
            return;
        } else if(request.user !== 'fernando') {
            console.log('User not recognized');
            return;
        } else {
            console.log('Auth successfull. Continuing request');
            if(this.next) {
                this.next.handle(request);
            }
        }
    }

}