import { MathLibrary } from "./math-library";

//This is the facade
export class ImcCalculator {

    constructor(private mathLibrary: MathLibrary) {}

    calculateIMC(weight: number, height: number) {
        //IMC = weight / (height ^ 2)
        this.mathLibrary.setOperands(height, height);
        this.mathLibrary.multiply();
        let heightSquared = this.mathLibrary.getResult();
        this.mathLibrary.setOperands(weight, heightSquared);
        this.mathLibrary.divide();
        return this.mathLibrary.getResult();
    }

    maximumIdealWeight(height: number) {
        // IMC < 25
        this.mathLibrary.setOperands(height, height);
        this.mathLibrary.multiply();
        let heightSquared = this.mathLibrary.getResult();
        this.mathLibrary.setOperands(25, heightSquared);
        this.mathLibrary.multiply();
        return this.mathLibrary.getResult();
    }

}