import { Device } from "./device";

export class TV implements Device {
    
    constructor(private channel: number = 1, private volume: number = 10) {}
    
    turnOn(): void {
        console.log("Turning on the TV");
        
    }    
    turnOff(): void {
        console.log("Turning off the TV");
    }
    changeChannel(newChannel: number): void {
        console.log('Changing TV channel to ' + newChannel);
        this.channel = newChannel;
    }
    changeVolume(newVolume: number): void {
        console.log('Changing TV volume to ' + newVolume);
        this.volume = newVolume;
    }
    getChannel(): number {
        console.log("Current TV channel is " + this.channel);
        return this.channel;
    }
    getVolume(): number {
        console.log("Current TV volume is " + this.volume);
        return this.volume;
    }
}
