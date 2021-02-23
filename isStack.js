// === CLASSES ===

// Stack
// LAST IN, FIRST OUT
class slStack {
    constructor() {
        this.top = null; // this.head, this.end
        this.length = 0;
    }

    // add to top
    push(newNode) {
        if (this.top === null) {
            this.top = newNode;
        } else {
            newNode.next = this.top;
            this.top = newNode;
        }
        this.length++;
    }

    // remove from top
    pop() {
        if (this.top === null) return null;

        const removed = this.top; // store previous top
        this.top = this.top.next; // move top pointer
        removed.next = null; // remove pointer from stored node
        this.length--; // decrement length

        return removed; // return the node
    }

    // aka check top
    peek() {
        return this.top;
    }

    // check if empty
    isEmpty() {
        return this.top === null;
    }

    // "1" == 1 true
    // "1" === 1 false

    // length getter
    getLength() {
        return this.length;
    }
}

// Queue
// FIRST IN, FIRST OUT
// class Queue {
//     constructor() {
//         this.front = null; // sometimes called head "front of the line"
//         this.back = null; // sometimes called rear or tail "back of the line"
//         this.length = 0;
//     }

//     enqueue(node) {
//         if (this.back === null) { // if back is null, list is empty
//             this.back = node;
//             this.front = node;
//         } else { // otherwise add to back
//             this.back.next = node;
//             this.back = node;
//         }
//         this.length++;
//     }

//     // remove from the front
//     dequeue() {
//         if (this.front === null) {
//             return null; // if empty return nothing
//         };
//         if (this.front === this.back) {
//             this.back = null;
//         };
//         let node = this.front;
//         this.front = node.next;
//         node.next = null;
//         this.length--;
//         return node;
//     }

//     // check the front of the queue
//     peek() {
//         // return this.front ? this.front.data : this.front;
//         return this.front;
//     }

//     // return if empty
//     isEmpty() {
//         return this.front === null;
//     }

//     // return length
//     count() {
//         return this.length;
//     }
// }

// Node
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

// === STANDALONE FUNCTIONS ===

// STACK - IS SORTED
// using only one extra stack for storage, check if a given stack is sorted
// return the stack back to it's original order when you are done
// assume node.data are integers
function isStackSorted(stack) {
    let tempStack = new slStack();
    let number = stack.peek().data;
    while(stack.isEmpty()!=true){
        console.log(number)
        if(stack.peek().data<number){
            console.log("in false return")
            return false
        } else {
            console.log("in else")
            tempStack.push(stack.pop());
            number = tempStack.peek().data;
        }
    }
    while(tempStack.isEmpty()!=true){
        
        stack.push(tempStack.pop());
        
    }
    return true;
}

let newStack = new slStack();
newStack.push(new Node(6))
newStack.push(new Node(5))
newStack.push(new Node(4))
newStack.push(new Node(3))
newStack.push(new Node(2))
newStack.push(new Node(1))
console.log(isStackSorted(newStack))