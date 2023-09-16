class LinkedList {
    constructor() {
        this.head = head;
        this.nodes = [];
        this.size = 0;
    }

    getSize() {
        return this.size;
    }

    clear() {
        this.head = null;
    }
}

class ListNode {
    constructor(item) {
        this.next = null;
        this.data = item;
    }
}

let node1 = new ListNode(1);
let node2 = new ListNode(2);

node1.next = node2;

let list = new LinkedList();
