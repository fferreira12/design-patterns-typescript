//intentionaly complex to simulate a complex system or libray
export class MathLibrary {
    result!: number;
    
    constructor(private operand1: number = 0, private operand2: number = 0) {}

    setOperands(operand1: number, operand2: number) {
        this.operand1 = operand1;
        this.operand2 = operand2;
    }

    sum() {
        this.result = this.operand1 + this.operand2;
    }

    subtract() {
        this.result = this.operand1 - this.operand2;
    }

    multiply() {
        this.result = this.operand1 * this.operand2;
    }

    divide() {
        this.result = this.operand1 / this.operand2;
    }

    getResult() {
        return this.result;
    }
}