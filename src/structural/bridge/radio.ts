import { Device } from "./device";

export class Radio implements Device {
    
    constructor(private channel: number = 2, private volume: number = 5) {}
    
    turnOn(): void {
        console.log("Turning on the radio");
        
    }    
    turnOff(): void {
        console.log("Turning off the radio");
    }
    changeChannel(newChannel: number): void {
        console.log('Changing radio channel to ' + newChannel);
        this.channel = newChannel;
    }
    changeVolume(newVolume: number): void {
        console.log('Changing radio volume to ' + newVolume);
        this.volume = newVolume;
    }
    getChannel(): number {
        console.log("Current radio channel is " + this.channel);
        return this.channel;
    }
    getVolume(): number {
        console.log("Current radio volume is " + this.volume);
        return this.volume;
    }
}