export default class ArrayList<T> {
    public length: number = 0;
    
    public a :T[] = [];

    constructor(length: number) {
    }

    prepend(item: T): void {
        this.a.unshift(item);
        this.length++;
    }

    // [0,1,2]
    insertAt(item: T, idx: number): void {
        var firstPart = this.a.slice(0, idx)
        firstPart.push(item);
        var secondPart = this.a.slice(idx, a.length)
        this.a = firstPart.concat(secondPart);
        this.length++;
    }
    append(item: T): void {
        this.a.push(item)
        this.length++;
    }
    remove(item: T): T | undefined {
        var idx = this.a.indexOf(item)
        let removedVal = this.a[idx]
        this.removeAt(idx)
        return removedVal
    }

    get(idx: number): T | undefined {
        return this.a[idx];
    }
    //      V
    // [ 0, x, 1, 2]
    removeAt(idx: number): T | undefined {
        this.length--
        var firstPart = this.a.slice(0, idx)
        var removed = this.a[idx]
        var secondPart = this.a.slice(idx+1,this.a.length)
        this.a=firstPart.concat(secondPart);
        return removed
    }
}