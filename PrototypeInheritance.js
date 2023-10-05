const radius = [1, 5, 2, 4];

//Functional Programming
//Optimize code

const area = function (r) {
  return Math.PI * r * r;
};

const circumference = function (r) {
  return 2 * Math.PI * r;
};

const diameter = function (r) {
  return 2 * r;
};

//prototype Inheritance
Array.prototype.calculate = function (logic) {
  const o = [];
  for (let i = 0; i < this.length; i++) {
    o.push(logic(this[i]));
  }
  return o;
};

//using map function
console.log(radius.map(area));
console.log(radius.map(circumference));
console.log(radius.map(diameter));

//Our own implementation of map function
console.log(radius.calculate(area));
console.log(radius.calculate(circumference));
console.log(radius.calculate(diameter));
