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
        console.log(this.data[this.data.length - 1]);
    }

    isEmpty() {
        return this.data.length == 0;
    }

    printStack() {
        console.log(this.data);
    }

}

var stack = new Stack();
console.log(stack.isEmpty());
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(1);

stack.pop();

stack.printStack();