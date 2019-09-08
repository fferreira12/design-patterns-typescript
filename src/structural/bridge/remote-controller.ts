import { Device } from "./device";

export class RemoteController {

    constructor(private device: Device) {}

    setDevice(device: Device) {
        this.device = device;
    }

    turnOn() {
        this.device.turnOn();
    }

    turnOff() {
        this.device.turnOff();
    }

    upChannel() {
        this.device.changeChannel(this.device.getChannel() + 1);
    }

    downChannel() {
        this.device.changeChannel(this.device.getChannel() - 1);
    }

    upVolume() {
        this.device.changeVolume(this.device.getVolume() + 1);
    }

    downVolume() {
        this.device.changeVolume(this.device.getVolume() - 1);
    }

}