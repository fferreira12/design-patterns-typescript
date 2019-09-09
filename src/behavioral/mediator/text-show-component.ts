import { Component } from "./component";
import { Mediator } from "./mediator";

export class TextShowComponent implements Component {

    text: string = '';

    constructor(public mediator: Mediator) {}

    updateText(text: string) {
        console.log('Got new text to show. Updating text');
        this.text = text;
        this.mediator.notify(this);
    }

}