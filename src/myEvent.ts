import { error, log } from 'console';
import { EventEmitter } from 'events';

type EventMap = {
    start: () => void;             
    data: (message: string) => void;  
    error: (error: Error) => void; 
  };
  
  class MyEmitter extends EventEmitter {
    emit<K extends keyof EventMap>(event: K, ...args: Parameters<EventMap[K]>): boolean {
      return super.emit(event, ...args);
    }
  
    on<K extends keyof EventMap>(event: K, listener: EventMap[K]): this {
      return super.on(event, listener);
    }
  }

  const event = new MyEmitter()

  event.on("start",(data:void)=>{
    log(data)
  })

  event.on("data",(data:string)=>{
    return log(data)
  })

  event.on("error",(err:Error)=>{
    error(err)
  })
  

  event.emit("start")
  event.emit("data","hi")
  event.emit("error", new Error('Something went wrong'))