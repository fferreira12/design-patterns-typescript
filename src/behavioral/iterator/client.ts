import { Collection } from "./collection";

let col = new Collection<string>(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']);

let iterator = col.createIterator();

while (iterator.hasMore()) {
    console.log(iterator.getNext());
}
