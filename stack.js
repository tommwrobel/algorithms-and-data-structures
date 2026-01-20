
class Stack {
  constructor() {
    this.stack = [];
  }
  push(value) {
    this.stack.push(value);
  }

  pop() {
    return this.stack.pop() || null;
  }

  peek() {
    return this.stack?.[this.stack.length - 1] || null;
  }

  isEmpty() {
    return this.stack.length === 0;
  }

  size() {
    return this.stack.length;
  }

  clear() {
    this.stack.length = 0;
  } 

  print() {
    console.log([...this.stack].reverse().join(" -> "));
  }
}
