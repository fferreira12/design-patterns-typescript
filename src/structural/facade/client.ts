import { MathLibrary } from "./math-library";
import { ImcCalculator } from "./imc-calculator";

let math = new MathLibrary();

let imc = new ImcCalculator(math);

let weight = 70;
let height = 1.685;

console.log(`With ${weight}kg and ${height}m your IMC is ${Number(imc.calculateIMC(weight, height)).toFixed(2)}`);

let isOverweight = weight > imc.maximumIdealWeight(height);
let text = isOverweight ? 'should be' : 'is'

console.log(`Your maximum weight ${text} ${Number(imc.maximumIdealWeight(height)).toFixed(2)}kg`);
