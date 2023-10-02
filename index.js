const radius = [1, 5, 2, 4];

const area1 = function (r) {
  const o = [];
  for (let i = 0; i < r.length; i++) {
    o.push(Math.PI * r[i] * r[i]);
  }
  return o;
};

console.log(area1(radius));

const circumference1 = function (r) {
  const o = [];
  for (let i = 0; i < r.length; i++) {
    o.push(2 * Math.PI * r[i]);
  }
  return o;
};

console.log(circumference1(radius));

const diameter1 = function (r) {
  const o = [];
  for (let i = 0; i < r.length; i++) {
    o.push(2 * r[i]);
  }
  return o;
};

console.log(diameter1(radius));

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

const calculate = function (r, logic) {
  const o = [];
  for (let i = 0; i < r.length; i++) {
    o.push(logic(r[i]));
  }
  return o;
};

//prototype Inheritance
Array.prototype.calculate = function (logic) {
  const o = [];
  for (let i = 0; i < this.length; i++) {
    o.push(logic(this[i]));
  }
  return o;
};

console.log(calculate(radius, area));
console.log(calculate(radius, circumference));
console.log(calculate(radius, diameter));

//using map function
console.log(radius.map(area));
console.log(radius.map(circumference));
console.log(radius.map(diameter));

//Our own implementation of map function
console.log(radius.calculate(area));
console.log(radius.calculate(circumference));
console.log(radius.calculate(diameter));
