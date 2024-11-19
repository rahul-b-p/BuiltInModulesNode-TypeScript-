import { log } from "console";
import EventEmitter from "events";

class MyEmitter extends EventEmitter{
    postNumber:number
    constructor(){
        super();
        this.postNumber = 0
    }
    addPost(count:number){
        this.postNumber+=count
    }
    deletePost(count:number){
        this.postNumber-=count
    }
    postCount(){
        log(this.postNumber)
    }
}

const event = new MyEmitter()

event.addPost(4)
event.postCount()
event.deletePost(2)
event.postCount()