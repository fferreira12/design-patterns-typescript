import { Chair } from "./chair";

export class VictorianChair implements Chair {
    sit() {
        console.log('Sitting on a Victorian Chair');
    }
}