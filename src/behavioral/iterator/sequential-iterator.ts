import { Iterator } from "./iterator";
import { Collection } from "./collection";

export class SequentialIterator<T> implements Iterator<T> {
    
    constructor(private currentIndex: number = 0, private collection: Collection<T>){}
    
    getNext(): T | undefined {
        if(!this.hasMore()) {
            return;
        }
        return this.collection.getItem(this.currentIndex++);
    }    
    hasMore(): boolean {
        return this.currentIndex < this.collection.getLenght()
    }

}