//Closures
//A closure is a combination of a function bundled together with it's lexical scope (surrounding state).
//Closure gives you access to an outer function's scope from an inner function 
//JavaScript, closures are created every time a function is created, at function creation time.

function x(){
  var a =5;
  function y(){
    console.log(a);
  }
  y();
}
x();

// x() is the high order function
//y() is the call back function