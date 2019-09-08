export interface Device {
    turnOn(): void;
    turnOff(): void;
    changeChannel(newChannel: number): void;
    changeVolume(newVolume: number): void;
    getChannel(): number;
    getVolume(): number;
}
