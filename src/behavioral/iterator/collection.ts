import { IterableCollection } from "./iterable-collection";
import { Iterator } from './iterator';
import { SequentialIterator } from "./sequential-iterator";

export class Collection<T> implements IterableCollection<T> {
    
    constructor(private items: T[] = []) {}

    addItem(item: T) {
        this.items.push(item);
    }

    getItem(index: number) {
        return this.items[index];
    }

    getLenght() {
        return this.items.length;
    }

    createIterator(): Iterator<T> {
        return new SequentialIterator<T>(0,this);
    }
    
}