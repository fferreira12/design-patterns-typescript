import { Editor } from "./editor";

export class History {

    history: Editor.Memento[] = [];

    constructor(private editor: Editor) {}

    addText(text: string) {
        this.history.push(this.editor.save())
        this.editor.addText(text);
    }

    undo() {

        let item = this.history.pop();
        if(item) {
            this.editor.restore(item);
        }

    }

}