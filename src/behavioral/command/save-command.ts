import { Command } from "./command";
import { Database } from "./database";

export class SaveCommand implements Command {

    data:any = null;
    
    constructor(private receiver: Database) {}

    setData(data:any) {
        this.data = data;
    }

    execute(): void {

        //testing execution delay
        console.log('Save was called. Awaiting 5 secs');
        
        setTimeout(() => {
            if(!this.data) {
                console.log('Must set data before saving');
                return;
            }
            this.receiver.save(this.data);
        }, 5000);

        
    }

}

