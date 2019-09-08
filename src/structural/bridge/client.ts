import { RemoteController } from "./remote-controller";
import { Radio } from "./radio";
import { Device } from "./device";
import { TV } from "./tv";

function operateDevice(remote: RemoteController) {
    remote.turnOn();
    remote.upVolume();
    remote.upVolume();
    remote.upVolume();
    remote.downVolume();
    remote.upChannel();
    remote.upChannel();
    remote.upChannel();
    remote.downChannel();
    remote.turnOff();
}

let device: Device = new Radio();

let remote = new RemoteController(device);

operateDevice(remote);

device = new TV();

remote.setDevice(device);

operateDevice(remote);