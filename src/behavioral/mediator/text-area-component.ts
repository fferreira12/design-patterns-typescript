import { Component } from "./component";
import { Mediator } from "./mediator";

export class TextAreaComponent implements Component {
    
    text = '';

    constructor(public mediator: Mediator) {}

    setText(text: string) {
        this.text = text;
        this.mediator.notify(this);
    }

}