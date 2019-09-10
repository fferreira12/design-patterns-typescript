import { SocialNetworkState } from "./social-network-state";
import { SocialNetwork } from "./social-network";

export class LoggedOutState implements SocialNetworkState {
    
    context!: SocialNetwork;

    constructor(private name: string) {}

    get Name(): string {
        return this.name;
    }

    setContext(context: SocialNetwork){
        this.context = context;
    }
    
    login(user: string, password: string): boolean {
        if(user == 'Fernando' && password == '1234') {
            console.log('Login successful');
            this.context.changeState(this.context.LOGGED_IN_STATE);
            return true;
        } else {
            console.log('Login failed');
            return false;
        }
    }    
    post(text: string): void {
        console.log('Making new Post: ' + text);
        
    }
    logout(): void {
        console.log('Logging out');
        
    }

}
