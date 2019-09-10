import { SocialNetworkState } from "./social-network-state";
import { LoggedInState } from "./logged-in-state";
import { LoggedOutState } from "./logged-out-state";

export class SocialNetwork {
    
    readonly LOGGED_IN_STATE: LoggedInState;
    readonly LOGGED_OUT_STATE: LoggedOutState;

    state: SocialNetworkState;

    constructor() {
        this.LOGGED_IN_STATE = new LoggedInState("Logged In");
        this.LOGGED_IN_STATE.setContext(this);
        this.LOGGED_OUT_STATE = new LoggedOutState("Logged Out");
        this.LOGGED_OUT_STATE.setContext(this);
        this.state = this.LOGGED_OUT_STATE;
    }

    changeState(state: SocialNetworkState) {
        console.log('Changing state to: ' + state.Name);
        this.state = state;
    }

    login(user: string, password: string) {
        this.state.login(user, password);
    }
    post(text: string) {
        this.state.post(text);
    }
    logout(){
        this.state.logout();
    }
}
