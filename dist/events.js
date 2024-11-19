import { log } from "console";
import EventEmitter from "events";
const event = new EventEmitter();
event.on("order recieved", (item, size, quantity) => {
    log(`order ready for ${size} ${item} * quantity = ${quantity}`);
});
event.emit("order recieved", "Sugar", "100g", 1);
