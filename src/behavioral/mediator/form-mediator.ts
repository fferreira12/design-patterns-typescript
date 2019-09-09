import { Mediator } from "./mediator";
import { TextAreaComponent } from "./text-area-component";
import { TextShowComponent } from "./text-show-component";

export class FormMediator implements Mediator {
    
    textArea: TextAreaComponent
    textShow: TextShowComponent

    constructor() {
        this.textArea = new TextAreaComponent(this);
        this.textShow = new TextShowComponent(this);
    }

    notify(sender: any): void {
        if(sender instanceof TextAreaComponent) {
            console.log('Got a notification from TextAreaComponent');
            console.log('Updating show area');
            this.textShow.updateText((sender as TextAreaComponent).text);
            
        } else if(sender instanceof TextShowComponent) {
            console.log('Got a notification from TextShowComponent');
            console.log('Text update is complete.');
        } else {
            console.log('Got an unknown notification');
        }
    }
    
    setText(text: string) {
        this.textArea.setText(text);
    }
}
