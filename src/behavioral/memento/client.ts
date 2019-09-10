import { Editor } from "./editor";
import { History } from "./history";

let editor = new Editor();

let history = new History(editor);

history.addText("First");
history.addText(" Second");
history.addText(" Third");
history.addText(" Fourth");
history.addText(" Fifth");

history.undo();
history.undo();
history.undo();
history.undo();
history.undo();