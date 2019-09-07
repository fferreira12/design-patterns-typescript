import { TemperatureProvider } from "./temperature-provider";
import { FahrenheintTempService } from "./fahrenheint-temp-service";
import { FahrToCelsiusAdapter } from "./adapter";

function displayTemperature(provider: TemperatureProvider) {
    console.log(`Temperature now is ${provider.getTemperature()}`);
}

let fahr = new FahrenheintTempService();
let adapter = new FahrToCelsiusAdapter(fahr);

displayTemperature(adapter);