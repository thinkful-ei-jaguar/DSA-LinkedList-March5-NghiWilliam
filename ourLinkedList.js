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
    // Relink pointers
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

  insertAfter(item, itemAfter) {
    if (this.head === null) {
      this.head = new _Node(item);
      console.log("This list was empty - added as first item");
      return;
    }
    let current = this.head;

    while (current.next !== null && current.value !== itemAfter) {
      current = current.next;
    }
    if (current.value !== itemAfter) {
      console.log("Item not found");
      return;
    }
    return (current.next = new _Node(item, current.next));
  }

  insertAt(item, position) {
    if (this.head === null) {
      this.head = new _Node(item);
      console.log("This list was empty - added as first item");
      return;
    }

    switch (position) {
      case 0:
        console.log("Cannot insert position at 0");
        return;
      case 1:
        this.head = new _Node(item, this.head);
        return;
      default:
        let count = 1;
        let current = this.head;
        let previous = this.head;
        while (count < position && current.next !== null) {
          previous = current;
          current = current.next;
          count++;
        }
        if (current.next === null) {
          console.log("Position exceeded length of list");
          return;
        } else {
          previous.next = new _Node(item, current);
        }
    }
  }
}

function display(list) {
  // Displays the linked list
  if (!list.head) {
    console.log("List is empty");
  }
  let current = list.head;
  // Do while loop prints first then assess conditional statement
  do {
    console.log(current);
    current = current.next;
  } while (current !== null);
  return;
}

function size(list) {
  // Returns the size of the linked list
  if (!list.head) {
    console.log("List is empty");
  }
  let counter = 1;
  let current = list.head;
  while (current.next !== null) {
    current = current.next;
    counter++;
  }
  return console.log(counter);
}

function isEmpty(list) {
  // Finds if the list is empty or not
  if (!list.head) {
    console.log("List is empty");
    return;
  }
}

function findPrevious(list, item) {
  // Finds the node before the item you're looking for
  if (!list.head) {
    console.log("List is empty");
    return;
  }
  let current = list.head;
  let previous = list.head;

  while (current.value !== item && current.next !== null) {
    previous = current;
    current = current.next;
  }
  // If item can't be found
  if (current.value !== item) {
    return console.log("Item does not exist");
  }
  // If matching item is first
  else if (list.head.value === current.value) {
    return console.log("Item was first - previous item doesn't exist");
  } else {
    return previous;
  }
}

function findLast(list) {
  // Returns the last node in the linked list
  if (!list.head) {
    return console.log("List is empty");
  }
  let current = list.head;
  while (current.next !== null) {
    current = current.next;
  }
  return current;
}

function main() {
  SLL = new LinkedList();
  SLL.insertFirst("Apollo");
  SLL.insertFirst("Boomer");
  SLL.insertFirst("Helo");
  SLL.insertFirst("Husker");
  SLL.insertFirst("Starbuck");
  SLL.insertFirst("Tauhida");
  // SLL.remove("Squirrel");
  // SLL.insertBefore("Athena", "Boomer");
  // SLL.insertAfter("Hotdog", "Helo");
  // SLL.insertAt("Kat", 3);
  // SLL.find("Kat");
  // SLL.remove("Tauhida");
  // display(SLL);
  // size(SLL);
  // findPrevious(SLL, "Tauhida");
  // findLast(SLL);
}

main();
