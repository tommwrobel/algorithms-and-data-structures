class Queue {
  constructor() {
    this.root = null;
    this.tail = null;
    this.size = 0;
  }

  enqueue(value) {
    const node = new QueueNode(value);
    
    if (!this.root) {
      this.root = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.size++;
  } 

  dequeue() {
    if (!this.root) {
      return null;
    }

    const node = this.root;

    this.root = node.next;

    if (!this.root) {
      this.tail = null;
    }

    this.size--;
    return node.value;
  } 
  
  peek() {
    return this.root?.value || null;
  } 

  isEmpty() {
    return !this.root;
  } 

  getSize() {
    return this.size;
  } 
  
  clear() {
    this.root = null;
    this.tail = null;
    this.size = 0;
  } 

  print() {
    let node = this.root;
    const nodesArr = [];
    while(node) {
      nodesArr.push(node.value);
      node = node.next;
    }
    console.log(nodesArr.join(" <- "))
  }
}

class QueueNode {
  constructor(value = null, next = null) {
    this.value = value;
    this.next = next;
  }
}
