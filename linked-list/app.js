class ListNode {
    constructor(item) {
        this.element = item
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    add(element) {

        var node = new ListNode(element);

        if (this.head == null) {
            this.head = element
        }
        else {
            let current = this.head;
            while (current.next) {
                current = current.next
            }

            current.next = node;
        }

        this.size++;
    }
    
    print() {
        var current = this.head;

        var str = "";

        while (current.next) {
            str += current.element + " ";
            current = current.next;
        }

        str += current.element;

        console.log(str);
    }
}

var node1 = new ListNode(1);
var node2 = new ListNode(2);
node1.next = node2;

var list = new LinkedList();
list.add(node1);

list.print();