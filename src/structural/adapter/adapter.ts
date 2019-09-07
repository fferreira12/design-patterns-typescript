import { TemperatureProvider } from "./temperature-provider";
import { FahrenheintTempService } from "./fahrenheint-temp-service";

export class FahrToCelsiusAdapter implements TemperatureProvider {
    
    constructor(private service: FahrenheintTempService){}
    
    getTemperature(): number {
        let f = this.service.getTemperature();
        return (f-32)*5/9;
    }

}