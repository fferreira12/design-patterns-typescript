import { Publisher } from "./publisher";
import { Emailer } from "./emailer";
import { Logger } from "./logger";

let publisher = new Publisher();

let emailer = new Emailer();
let logger = new Logger();

publisher.subscribe(emailer);
publisher.subscribe(logger);

publisher.notify('First batch');
publisher.notify('Second batch');

publisher.unsubscribe(emailer);

publisher.notify('Third batch');
