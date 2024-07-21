class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.count = 0;
  }

  insertAt(index, data) {
    if (index < 0 || index > this.count) {
      throw new Error("범위를 벗어났습니다.");
    }

    const newNode = new Node(data);

    if (index === 0) {
      newNode.next = this.head;
      this.head = newNode;
    } else {
      let currentNode = this.head;

      for (let i = 0; i < index - 1; i++) {
        currentNode = currentNode.next;
      }

      newNode.next = currentNode.next;
      currentNode.next = newNode;
    }
    this.count++;
  }

  printAll() {
    let currentNode = this.head;
    let t = "[";

    while (currentNode != null) {
      t += currentNode.data;
      currentNode = currentNode.next;

      if (currentNode != null) {
        t += ", ";
      }
    }

    t += "]";
    console.log(t);
  }

  clear() {
    this.head = null;
    this.count = 0;
  }

  insertLast(data) {
    // this.insertAt(this.count, newNode)
    const newNode = new Node(data);
    let currentNode = this.head;

    for (let i = 0; i < this.count - 1; i++) {
      currentNode = currentNode.next;
    }

    currentNode.next = newNode;
    this.count++;
  }

  deleteAt(index) {
    if (index < 0 || index >= this.count) {
      throw new Error("범위를 벗어났습니다.");
    }

    let currentNode = this.head;

    if (index === 0) {
      const targetNode = currentNode;
      this.head = targetNode.next;
      this.count--;
      return targetNode;
    } else {
      for (let i = 0; i < index - 1; i++) {
        currentNode = currentNode.next;
      }
      const targetNode = currentNode.next;
      currentNode.next = targetNode.next;
      this.count--;
      return targetNode;
    }
  }
}

export { Node, LinkedList };

const a = new Node(0);
const b = new Node(1);
const c = new Node(2);

const ll = new LinkedList();
ll.insertAt(0, 100);
ll.insertAt(1, 200);
ll.insertAt(2, 300);
ll.insertLast(1000);
ll.insertLast(2000);
ll.insertLast(3000);
ll.deleteAt(ll.count - 1);
ll.deleteAt(2);

console.log(ll.printAll());
console.log(ll.count);
