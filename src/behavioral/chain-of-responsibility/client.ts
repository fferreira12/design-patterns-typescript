import { LoggerHandler } from "./logger-handler";
import { UrlHandler } from "./url-handler";
import { AuthHandler } from "./auth-handler";

let logger = new LoggerHandler();
let auth = new AuthHandler();
let url = new UrlHandler();

//Chain
logger.setNext(auth);
auth.setNext(url);

let request = {
    user: 'fernando',
    url: '/products'
}

logger.handle(request);

//other option

let main = new LoggerHandler(new AuthHandler(new UrlHandler()));

main.handle(request);