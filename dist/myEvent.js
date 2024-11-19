import { error, log } from 'console';
import { EventEmitter } from 'events';
class MyEmitter extends EventEmitter {
    emit(event, ...args) {
        return super.emit(event, ...args);
    }
    on(event, listener) {
        return super.on(event, listener);
    }
}
const event = new MyEmitter();
event.on("start", (data) => {
    log(data);
});
event.on("data", (data) => {
    return log(data);
});
event.on("error", (err) => {
    error(err);
});
event.emit("start");
event.emit("data", "hi");
event.emit("error", new Error('Something went wrong'));
