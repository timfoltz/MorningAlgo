

// ******************Feb 11 2021*************
var numberOfNodes = 0;

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
        numberOfNodes++;
    }
}

class SLL {

    constructor() {
        this.head = null;
    }



    // ------------------------------------------------------------------------------------------------------
    //// THURSDAY
    // ------------------------------------------------------------------------------------------------------
    // if val is contained within the current list, delete it.
    // return void
    // assume there are no duplicates
    // consider the edge case if you have to delete the head node
    // consider the edge case your list is empty
    // consider the edge case that your list does not contain the val
    // If current.next.value = value, then change the read path
    delete(data) {}

    // Return the total amount of nodes in the list
    size() {
        console.log(`There are ${numberOfNodes} nodes`);
    }


    // ------------------------------------------------------------------------------------------------------
    //// WEDNESDAY
    // ------------------------------------------------------------------------------------------------------

    // console log (print) the data of every node in the current list
    read() {
        var current = this.head;

        while (current) {
            console.log("Data of this node: " + current.data);
            current = current.next;
        }
    }

    // find: return true / false if current list contains a data equal to value
    contains(value) {
        var runner = this.head;

        while (runner) {
            if (runner.data == value) {
                return true;
            }
            runner = runner.next
        }
        return false;
    }

    // Remove from front: remove and return the first node in the SLL
    removeFromFront() {
        if (this.isEmpty()) return null;

        var removed = this.head;
        this.head = this.head.next;
        removed.next = null;
        return removed;
    }

    // ------------------------------------------------------------------------------------------------------
    //// TUESDAY
    // ------------------------------------------------------------------------------------------------------

    // return true or false if this.head is null
    isEmpty() {
        if (this.head) {
            return true;
        } else {
            return false;
        }
    }


    // add given node to the head, if it exists. return void
    addToFront(node) {
        node.next = this.head;
        this.head = node;
    }

    // createa  new node with given data, add it to the head. return void
    addDataToFront(data) {
        var newNode = new Node(data);
        newNode.next = this.head
        this.head = newNode; // move the head to the new node
    }


}


var mySLL = new SLL();

mySLL.addToFront(new Node(13));
mySLL.addToFront(new Node(17));
mySLL.addToFront(new Node(18));
mySLL.addToFront(new Node(22));
mySLL.addDataToFront(27);

mySLL.read();
console.log(mySLL.contains(13));
console.log(mySLL.contains(14));
mySLL.size();
// ******************Feb 10 2021*************
// morning algos
// singly linked list
let numberOfNodes = 0;

class Node {
  constructor(data) {
      this.data = data
      this.next = null

  }
}

class SLL {
  constructor() {
      this.head = null
  }
  // console.log the data of every node in the current list
  size() {
    console.log(`There are ${numberOfNodes} nodes`);
}

  read() {
      let runner = this.head
      while (runner) {
          console.log(runner.data)
          runner = runner.next

      }

  }
  //find: return true/false if current list contains a data equal to value
  contains(value) {
      let runner = this.head
      while (runner) {
          if (runner.data === value) {
              return true
          }
          runner = runner.next
      }
      return false

  }
  // Remove from front: remove and return the first node in SLL
  removeFromFront() {
      let temp = this.head
      this.head = this.head.next
      temp.next = null
      return temp


  }
  // sll.head --> () --> () --> () --> null

  // return true or false if this.head is null
  isEmpty() {
      if (this.head) {
          return true
      }
      else {
          return false;
      }
  }
  // add given node to the head, if it exists, return void
  addToFront(node) {
      node.next = this.head // set the new node's next to the head
      this.head = node // move the head to the new node


  }
  // create new node with given data, add it to the head, return void
  addDataToFront(data) {
      let newNode = new Node(data) // create a new node with the data
      newNode.next = this.head // set the new node's next to the head
      this.head = newNode // move the head to the new node
  }

}

let mySLL = new SLL()
mySLL.addDataToFront(10)
mySLL.addDataToFront(100)
mySLL.addDataToFront(1000)
mySLL.addDataToFront(10000)
mySLL.addDataToFront(100000)
mySLL.addDataToFront(1000000)

mySLL.read()
mySLL.removeFromFront()
mySLL.read()
console.log(mySLL.contains(100))
console.log(mySLL.contains(50))

console.log(mySLL.size())
// var node = new Node(10)
// node.data = 10
// node.next = new Node()

// var head = {
//     data: 7, 
//     next: {

//     }
// }
// var runner = head
// while(runner.next != null){
//     runner = runner.next
// }

// console.log(runner.data) // prints 5
// ******************Feb 9 2021*************
// class Node {
//     constructor(data) {
//       this.data = data;
//       this.next = null; // access to get to another object -- NULL is the default value
//     }
//   }
  
//   class SLL {
//     constructor() {
//       this.head = null; // very FIRST element is defaulted to NULL
//     }
  
//     // return true or false if this.head is null
//     isEmpty() {
//       if (this.head) {
//         return true;
//       } else {
//         return false;
//       }
//     }
  
//     // add given node to the head, if it exists. return void
//     addToFront(node) {
//       if (this.head) {
//         node.next = this.head;
//         this.head = node;
//       } else {
//         this.head = node;
//       }
//     }
  
//     // create a new node with given data, add it to the head. return void
//     addDataToFront(data) {
//       var newNode = node(data);
//       newNode.addToFront();
//     }
//   }
  
//   var node = new Node(10);
//   var mySLL = new SLL();
  // mySLL.addToFront();
  
  // NOTES:
  // all nodes by default point to null
  // each node has .data and .next UP UNTIL there's a new node then it points to null
  // NULL is a placeholder until we place somehting next BUT also when we reach the end of our list