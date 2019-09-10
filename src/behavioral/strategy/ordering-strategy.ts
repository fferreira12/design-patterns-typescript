export interface OrderingStrategy {
    order(items: number[]): number[];
}