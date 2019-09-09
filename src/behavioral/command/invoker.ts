import { Command } from "./command";

export class Invoker {
    constructor(private command: Command) {}

    setCommand(command: Command) {
        this.command = command;
    }

    executeCommand() {
        this.command.execute();
    }
}