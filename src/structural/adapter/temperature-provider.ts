export interface TemperatureProvider {
    //Expects temperature in C
    getTemperature(): number;
}