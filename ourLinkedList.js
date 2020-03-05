class _Node {
  constructor(value = null, next = null) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(item) {
    this.head = new _Node(item, this.head);
  }

  insertLast(item) {
    if (this.head === null) {
      this.insertFirst(item);
    } else {
      let tempNode = this.head;
      while (tempNode.next !== null) {
        tempNode = tempNode.next;
      }
      tempNode.next = new _Node(item, null);
    }
  }

  find(item) {
    // Start at the head
    let currNode = this.head;
    // If the list is empty
    if (!this.head) {
      return null;
    }
    // Check for the item
    while (currNode.value !== item) {
      /* Return null if it's the end of the list 
           and the item is not on the list */
      if (currNode.next === null) {
        return null;
      } else {
        // Otherwise, keep looking
        currNode = currNode.next;
      }
    }
    // Found it
    return currNode;
  }

  remove(item) {
    // If the list is empty
    if (!this.head) {
      return null;
    }
    // If the node to be removed is head, make the next node head
    if (this.head.value === item) {
      this.head = this.head.next;
      return;
    }
    // Start at the head
    let currNode = this.head;
    // Keep track of previous
    let previousNode = this.head;

    while (currNode !== null && currNode.value !== item) {
      // Save the previous node
      previousNode = currNode;
      currNode = currNode.next;
    }
    if (currNode === null) {
      console.log("Item not found");
      return;
    }
    previousNode.next = currNode.next;
  }

  insertBefore(item, itemBefore) {
    // Check if list is empty
    if (this.head === null) {
      this.insertFirst(item);
      console.log("List was empty - added as first item");
      return;
    }

    let previous = this.head;
    let current = this.head;
    // Check to make sure if item is what im looking for and whether it's last
    while (current.next !== null && current.value !== itemBefore) {
      previous = current;
      current = current.next;
    }
    // Check if item found and is the first item on list
    if (this.head === current && current.value === itemBefore) {
      this.head = new _Node(item, current);
    }
    // Check if item found and is not the first item on list
    else if (current.value === itemBefore) {
      return (previous.next = new _Node(item, current));
    }
    // All else
    else {
      console.log("Item not found");
      return;
    }
  }
}

function main() {
  SLL = new LinkedList();
  SLL.insertFirst("Apollo");
  SLL.insertFirst("Boomer");
  SLL.insertFirst("Helo");
  SLL.insertFirst("Husker");
  SLL.insertFirst("Starbuck");
  SLL.insertFirst("Tauhida");
  SLL.remove("Squirrel");
  SLL.insertBefore("Now", "Boomer");
}

main();
