export default class Queue<T> {
    public length: number = 0;
    public tail : Node<T>;
    public head : Node<T>;

    constructor() {
    }

    enqueue(item: T): void {
        let nn = new Node<T>(item);
        if (this.length==0) {
            this.head = nn;
            this.tail = nn;
        } else {
            this.tail.next = nn;
            this.tail = nn;
        }
        this.length++;
    }

    deque(): T | undefined {
        
        if (this.length==0) return undefined;
        
        this.length--;
        let rn = this.head;

        if (this.head.next) {
            this.head = this.head.next;
        }

        return rn.value;     
    }

    peek(): T | undefined { 
        return this.head.value;
    }
}

class Node<T> {
    constructor(val : T) {
        this.value = val;
    }
    public value : T;
    public next: Node<T>;
}