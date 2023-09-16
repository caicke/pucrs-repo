class Stack {
    constructor()
    {
        this.data = [];
    }

    push(item) {
        this.data.push(item);
    }
    
    pop() {
        this.data.pop();
    }

    peek() {
        return this.data[this.data.length - 1];
    }

    isEmpty() {
        return this.data.length == 0;
    }

    printStack() {
        console.log(this.data);
    }

}

class Queue {
    constructor() {
        this.items = [];
    }

    enqueue(item) {
        this.items.push(item);
    }

    dequeue() {
        this.items.shift();
    }

    isEmpty() {
        return this.items.length == 0;
    }

    peek() {
        if (this.isEmpty()) {
            return "Empty Queue";
        }
            
        return this.items[0];
    }

    printQueue() {
        console.log(this.items);
    }
}

// Creating stack
var stack = new Stack();
console.log("Empty Stack?",stack.isEmpty());
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(1);

stack.pop();

stack.printStack();


// =========================

// Creating queue
var queue = new Queue();
console.log("Peek:", queue.peek());
queue.enqueue({
    "name": "John",
    "age": 23,
    "movie": "Spider Man"
});

queue.enqueue({
    "name": "Bruce",
    "age": 41,
    "movie": "Oppenheimer"
});

queue.enqueue({
    "name": "Alice",
    "age": 18,
    "movie": "Barbie"
});

queue.dequeue();


queue.printQueue();