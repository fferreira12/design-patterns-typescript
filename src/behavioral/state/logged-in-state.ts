import { SocialNetworkState } from "./social-network-state";
import { SocialNetwork } from "./social-network";

export class LoggedInState implements SocialNetworkState {
    
    context!: SocialNetwork;

    constructor(private name: string) {}

    get Name(): string {
        return this.name;
    }

    setContext(context: SocialNetwork){
        this.context = context;
    }
    
    login(user: string, password: string): boolean {
        console.log('You are already logged in. Logout first');
        return true;
    }    
    post(text: string): void {
        console.log('Making new Post: ' + text);
    }
    logout(): void {
        console.log('Logging out');
        this.context.changeState(this.context.LOGGED_OUT_STATE);
    }

}
