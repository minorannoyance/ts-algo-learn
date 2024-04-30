export default class SinglyLinkedList<T> {
    public length: number = 0;
    
    public root: ListRootNode<T>;
    constructor() {
        this.root = new ListRootNode<T>()
    }

    prepend(item: T): void {
        let oldFirst = this.root.next;
        this.root.next = new ListNode<T>(item);
        this.root.next.next = oldFirst;
        this.length++;
    }
    insertAt(item: T, idx: number): void {
        let prev = this.getNode(idx-1);
        let oldNodeAtPointer = this.getNode(idx);
        prev.next = new ListNode<T>(item);
        prev.next.next = oldNodeAtPointer;
        this.length++;
    }
    append(item: T): void {
        let lastNode = this.getNode(this.length-1)
        if (lastNode==undefined) {
            lastNode=new ListNode<T>(item);
            this.root.next = lastNode;
            this.length++;
        }
        lastNode.next = new ListNode<T>(item);
        this.length++;
    }

    get(idx: number): T | undefined {
        let node = this.getNode(idx)
        return node.value
    }

    getNode(idx : number) : ListNode<T>{
        let node : ListNode<T> = this.root.next;
        
        for (let i=0; i<idx && node.next != undefined; i++) {
            node=node.next;
            console.error(idx, i, noe.value, "nexting")    
        }
    
        return node
    }

    
    indexOf(item : T) : number{
        let index=0
        let node = this.root.next;
        while(node.next) {
            if (node.value == item) {
                return index;
            }

            index++;
        }
        return -1;
    }

    remove(item: T): T | undefined {
        const cutPoint: number = this.indexOf(item);

        return this.removeAt(cutPoint) 
    }

    removeAt(idx: number): T | undefined {
                
        // TODO handle cutpoint is 0, root is prev
        const prev = this.getNode(idx-1)
        const next = this.getNode(idx+1)
        prev.next = next
        this.length--

        const removedItem = this.getNode(idx)
        return removedItem.value
    }
}

class ListNode<T> {
    constructor(value: T) {
        this.value = value;
    }

    public next: ListNode<T>;

    public value : T;
}

class ListRootNode<T> {
    public next: ListNode<T>;
}
