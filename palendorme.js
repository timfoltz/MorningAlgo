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
class Queue {
    constructor() {
        this.front = null; // sometimes called head "front of the line"
        this.back = null; // sometimes called rear or tail "back of the line"
        this.length = 0;
    }

    enqueue(node) {
        if (this.back === null) { // if back is null, list is empty
            this.back = node;
            this.front = node;
        } else { // otherwise add to back
            this.back.next = node;
            this.back = node;
        }
        this.length++;
    }

    // remove from the front
    dequeue() {
        if (this.front === null) {
            return null; // if empty return nothing
        };
        if (this.front === this.back) {
            this.back = null;
        };
        let node = this.front;
        this.front = node.next;
        node.next = null;
        this.length--;
        return node;
    }

    // check the front of the queue
    peek() {
        // return this.front ? this.front.data : this.front;
        return this.front;
    }

    // return if empty
    isEmpty() {
        return this.front === null;
    }

    // return length
    count() {
        return this.length;
    }
}

// Node
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

// === HELPER FUNCTIONS ===

// QUEUE - IS PALINDROME
// return true or false if the queue is a palindrome
// a palindrome is a string or number that is equal to itself when reversed

// racecar === racecar
// race !=== ecar

// you may not linearly iterate through your queue
// only use public queue methods (enqueue, dequeue, checkFront, isEmpty, length)
// return the queue back to it's original order

// you may use stacks queues arrays or dictionaries as additional storage
// you may create helper methods to break this challenge down into smaller parts
function isPalindrome(queue) {
    let temp1 = ""
    let temp2 = ""
    let length = queue.count();

    while (length) {
        let node = queue.dequeue();
        temp1 = node.data + temp1;
        temp2 = temp2 + node.data;
        // console.log("temp1 ",temp1);
        // console.log("temp2 ",temp2);

        queue.enqueue(node);
        length--;
    }
    console.log(temp1);
    console.log(temp2);
    
    return temp1 === temp2;
    
}

var myQueue = new Queue();

myQueue.enqueue(new Node(1));
myQueue.enqueue(new Node(2));
myQueue.enqueue(new Node(3));
myQueue.enqueue(new Node(2));
myQueue.enqueue(new Node(1));

var myOtherQueue = new Queue();

myOtherQueue.enqueue(new Node(1));
myOtherQueue.enqueue(new Node(40));
myOtherQueue.enqueue(new Node(3));
myOtherQueue.enqueue(new Node(2));
myOtherQueue.enqueue(new Node(1));


console.log("myQueue",isPalindrome(myQueue)); // true
console.log("otherQ",isPalindrome(myOtherQueue)); // false