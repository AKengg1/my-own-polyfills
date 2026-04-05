//To get the last element of the array(like pop)
Array.prototype.last = function () {
  return this[this.length - 1];
};

console.log([1, 2, 3].last());

//It maps twice the elements of the array
Array.prototype.mymapTwo = function () {
  let arr = [];
  for (let i = 0; i < this.length; i++) {
    arr.push(this[i] * 2);
  }
  return arr;
};

console.log([2, 5, 8, 10, 223].mymapTwo());

//My Own forEach
Array.prototype.myForEach = function (callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i], i, this);
  }
};

[1, 2, 3].myForEach((n) => console.log(n));

//My filter
Array.prototype.myFilter = function (callback) {
  const result = [];

  for (let i = 0; i < this.length; i++) {
    if (callback(this[i])) {
      result.push(this[i]);
    }
  }

  return result;
};

console.log([1, 2, 3, 4].myFilter((n) => n % 2 === 0));

//My reduce
Array.prototype.myReduce = function (callback, initialval) {
  let acc = initialval;
  for (let i = 0; i < this.length; i++) {
    acc = callback(acc, this[i]);
  }
  return acc;
};
console.log([1, 2, 3, 4].myReduce((acc, current) => acc + current, 10));

//adding 10 to every element
Array.prototype.addTen = function () {
  let arr = [];
  for (let i = 0; i < this.length; i++) {
    arr.push(this[i] + 10);
  }
  return arr;
};

console.log([1, 2, 3].addTen())