/* stack */

// functions: push, pop, peek, length

/**
 * Implementation using primitive array method
 */

var letters = []; //basiocally this is our stack

var word = "yog sharmma";

var rword = "";

// put the letters of the word into the stack
for (var i = 0; i < word.length; i++) {
  letters.push(word[i]);
}

// pop of the letters from the array
for (var j = 0; j < word.length; j++) {
  rword += letters.pop();
}

if (rword === word) {
  console.log("Given word is a palindrome");
} else {
  console.log("Word is not palindrome");
}

/**
 * Implementation of stack using js function
 *
 * Methods: Push, Pop, Peek, Size
 */

class Stack {
  constructor() {
    this.count = 0;
    this.storage = {};

    this.push = function (value) {
      this.storage[this.count] = value;
      this.count++;
    };

    this.pop = function () {
      if (this.count === 0) {
        return undefined;
      }
      this.count--;
      var result = this.storage[this.count];
      delete this.storage[this.count];
      return result;
    };

    this.size = function () {
      return this.count;
    };

    this.peek = function () {
      return this.storage[this.count - 1];
    };
  }
}

var newStack = new Stack();

newStack.push(1);
newStack.push(2);
newStack.push(3);
console.log(newStack.peek());
newStack.pop();
console.log(newStack.peek());
newStack.pop();
console.log(newStack.peek());
