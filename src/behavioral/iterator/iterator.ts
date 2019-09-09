export interface Iterator<T> {
    getNext(): T | undefined;
    hasMore(): boolean;
}