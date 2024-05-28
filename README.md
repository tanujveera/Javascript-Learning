# Javascript

This Repository has Javascript concepts which are essential in mastering the language.
All the codes with their explainations have been given.

# Scope

## var vs let vs const

`var` is global scoped and `let` & `const` are block scoped.

Block Scope & Function Scope

```js
//function scope
function a() {}

//Block Scope
{
}
```

Example:

```js
/* Lets say we have a block which has a variable 
  'var' then it is accessible out of the block
  'let' & 'const' then it is accessible only in the block
*/
{
  var b = 7;
  const a = 5;
}
console.log(a); // throws error
console.log(b); // prints 7
```

## Shadowing

When a variable is declared in a certain scope having the same name defined on its outer scope and when we call the variable from the inner scope, the value assigned to the variable in the inner scope is the value that will be stored in the variable in the memory space.

![JS Scope](https://media.dev.to/cdn-cgi/image/width=800%2Cheight=%2Cfit=scale-down%2Cgravity=auto%2Cformat=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Frs7scfz1gqhbxxon8mdy.png "JavaScript Scope")

```js
function test() {
  let a = "hello";
  if (true) {
    let a = "hi";
    console.log(a); // prints hi
  }
  console.log(a); // prints hello
}

test();
```

## Illegal Shadowing

While shadowing a variable, it should not cross the boundary of the scope, i.e. we can shadow var variable by let variable but cannot do the opposite. So, if we try to shadow let variable by var variable it is Illegal Shadowing

```js
function test() {
  let a = "hello";
  var b = "apple";
  if (true) {
    var a = "hi"; // Illegal Shadowing
    let b = "cat"; // Shadowing
    console.log(a); // SyntaxError: Identifier 'a' has already been declared
  }
  console.log(a);
}

test();
```

## Declaration

We can re-declare a variable using `var` but using `let` & `const` we can't re-declare a variable

```js
// var can be re-declared
var a = 1;
var a = 2;

// let const cannot be redeclared
// these declarations throw error
let a = 1;
let a = 2;

const b = 2;
const b = 2;

// var and let can be declared without initialization
var a;
let b;
// cannot re-assign a value to const
const c = 5;
c = 9; // throws error
```

## JavaScript Execution Context


## Hoisting
