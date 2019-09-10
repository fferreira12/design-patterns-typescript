export class Editor {

    constructor(private text: string = '') {}

    get Text(): string {
        return this.text;
    }
    set Text(value: string) {
        this.text = value;
        console.log('Current Text: ' + this.text);
        
    }

    addText(text: string) {
        this.Text = this.Text + text;
    }

    static Memento = class {
        constructor (private state: string){}

        getState(): string{
            return this.state;
        }
    }

    save() {
        return new Editor.Memento(this.Text);
    }

    restore(memento: Editor.Memento) {
        this.Text = memento.getState();
    }

}

export namespace Editor {
    export type Memento = InstanceType<typeof Editor.Memento>;
}