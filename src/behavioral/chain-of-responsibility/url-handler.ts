import { BaseHandler } from "./base-handler";

export class UrlHandler extends BaseHandler {
    
    handle(request: any) {
        if(!request.url) {
            console.log('Must set a URL to fetch');
            return;
        } else if(request.url === '/') {
            console.log('Returning Home Page');
            return 'Home Page';
        } else if(request.url === '/products') {
            console.log('Returning Products Page');
            return 'Products Page';
        } else {
            console.log('Page not found');
            return 'Page not found';
        }
    }
}