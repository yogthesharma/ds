// They are kind of like array except for the fact that there are no dulplicate items and the values are not in any particular order.

function mySet() {
  var collection = [];

  this.has = function (element) {
    return collection.indexOf(element) !== -1;
  };

  this.values = function () {
    return collection;
  };

  this.add = function (element) {
    if (!this.has(element)) {
      collection.push(element);
      return true;
    }
    return false;
  };

  this.remove = function (element) {
    if (this.has(element)) {
      index = collection.indexOf(element);
      collection.splice(index, 1);
      return true;
    }
    return false;
  };

  this.size = function () {
    return collection.length;
  };

  // now the below listed methods are not the part of es6 implementation

  this.union = function (otherSet) {
    var newSet = new mySet();
    var firstSet = this.values();
    var secondSet = otherSet.values();

    for (var i = 0; i < firstSet.length; i++) {
      newSet.add(firstSet[i]);
    }

    for (var i = 0; i < secondSet.length; i++) {
      newSet.add(secondSet[i]);
    }
    return newSet;
  };

  this.intersection = function (otherSet) {
    var newSet = new mySet();
    var firstSet = this.values();

    for (var i = 0; i < firstSet.length; i++) {
      if (otherSet.has(firstSet[i])) {
        newSet.add(firstSet[i]);
      }
    }
    return newSet;
  };

  this.difference = function (otherSet) {
    var newSet = new mySet();
    var firstSet = this.values();
    for (var i = 0; i < firstSet.length; i++) {
      if (!otherSet.has(firstSet[i])) {
        newSet.push(firstSet[i]);
      }
    }
    return newSet;
  };

  this.subset = function (otherSet) {
    var firstSet = this.values;
    return firstSet.every((val) => otherSet.has(val));
  };
}

var newSet = new mySet();
var anotherSet = new mySet();

newSet.add(1);
newSet.add(2);
newSet.add(3);
newSet.add(4);
newSet.add(5);
newSet.add(6);
newSet.add(7);
// console.log(newSet.values());
// console.log(newSet.has(4));
// console.log(newSet.has(12));
newSet.remove(7);
newSet.remove(6);

anotherSet.add(4);
anotherSet.add(5);
anotherSet.add(6);
anotherSet.add(7);
anotherSet.add(8);

console.log(newSet.union(anotherSet).values());
console.log(newSet.intersection(anotherSet).values());

console.log(newSet.size());
console.log(newSet.values());
