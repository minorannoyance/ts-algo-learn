export default class Stack<T> {

    public length: number = 0;
    public tail : Node<T>;
    public head : Node<T>;

    constructor() {
    }

    push(item: T): void {
        let nn = new Node<T>(item);
        if (this.length==0) {
            this.head = nn;
            this.tail = nn;
        } else {
            let prevTail = this.tail;
            this.tail = nn;
            this.tail.prev = prevTail;
        }
        this.length++
    }

    pop(): T | undefined {
        if (this.length==0) {
            return undefined;
        }
        let prevTail = this.tail;
        this.tail = this.tail.prev;
        this.length--;
        return prevTail.value;
    }

    peek(): T | undefined {
        return this.tail.value;
    }
}

class Node<T> {
    constructor(val: T) {
        this.value = val;
    }
    public value: T;
    public prev: Node<T>;
}