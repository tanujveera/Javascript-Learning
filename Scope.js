// var vs let vs const
// Scope

//function scope
function a() {}

//Block Scope
{
}
/* Lets say we have a block which has a variable 
  'var' then it is accessible out of the block
  'let' & 'const' then it is accessible only in the block
*/
{
  var b=7;
  const a = 5;
}
console.log(a); // throws error
console.log(b); // prints 7

//----------------------------------------------------------

// Shadowing
/**
 * 'a' is declared. another variable 'a' is declared in the if condition.
 * In 1st console.log(), we get 'hi' printed
 * In 2nd console.log(),; we get 'hello' printed
 */

// Illegal Shadowing
/**
 * If we declare a variable with 'var'
 */

function test(){
  let a = "hello";
  if(true){
    let a="hi"
    console.log(a)
  }
  console.log(a)
}

test();

//--------------------------------------------------------

//Scope of let, const and var

for (var i = 0; i <= 3; i++) {
  console.log(i); // 0,1,2,3
}
console.log("----------------------");

/*
Since var is global scoped, and setTImeout() is attached with a()
when 1000 ms are done, the value of i is 4 and then all the iterations of i are assigned to 4. 
So that is why it prints 4 four times.
*/
for (var i = 0; i <= 3; i++) {
  const a = () => {
    console.log(i); // 4,4,4,4
  };
  console.log("---" + i);
  setTimeout(a, 1000);
}

console.log("----------------------");

/*
let is block scoped, so it is exclusive for the "for" loop
*/
for (let i = 0; i <= 3; i++) {
  const a = () => {
    console.log(i); // 0,1,2,3
  };
  console.log("---" + i);
  setTimeout(a, 1000);
}
