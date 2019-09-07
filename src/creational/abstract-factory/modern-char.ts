import { Chair } from "./chair";

export class ModernChair implements Chair {
    sit() {
        console.log('Sitting on a Modern Chair');
    }
}