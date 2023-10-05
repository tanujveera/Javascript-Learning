//Promises using .then()
//Promise can be create and there are 2 arguments (resolve, reject)

// const p = new Promise((resolve, reject) => {
//   resolve("Promise is resolved");
// });

//When the promise is fulfilled, the Callback function will be hold in Microtask Queue as it is a promise 
//When timer goes off, the promise is then resolved immediately.
const p = new Promise((resolve, reject)=>{
  setTimeout(()=> resolve("Promise is resolved successfully"),10000);
});

const p2 = new Promise((resolve, reject)=>{
  setTimeout(()=> resolve("Promise is resolved successfully"),5000);
});

function getData(){
  //JS will not wait for the promise to resolve and goes to "line 16" and prints it
  p2.then(res => console.log(res));
  p2.then(res=>console.log(res));  
  console.log("Line 16");
}

getData();

//----------------------------------------------------
console.log("----------------------------------------------------");
/*
async:
->async function either returns a promise or return a value, it will ultimately wrap the value into a promise and return
->async function will only return a promise
*/

//the conventional way of handling promise using then()
//Even though the function returns string, it wraps the string into a promise and returns it. Since, it is a async function
//So therefore we have to use then() to get the value from the promise
async function asyncName(){
  return "Tanuj Veera";
}

const Name = asyncName();
console.log(Name); //returns the promise itself

Name.then(s => console.log("Async "+s));

//this is also similar but here we send a promise "p" 
async function asyncFun(){
  return p;
}

p.then(res => console.log(res));

//-------------------------------------------------------
console.log("----------------------------------------------------");
/*
async & await:
async and await combination is used to handle promises
async & await vs promise .then/ .catch
await can only be used only in async function
*/

const prom1 = new Promise((resolve,reject)=>{
  setTimeout(()=>resolve("Prom 1 resolved"),5000);
});

const prom2 = new Promise((resolve,reject)=>{
  setTimeout(()=>resolve("Prom 2 resolved"),10000);
});

//In function getData() (without async) it doesn't wait for promise to resolve
  //But here using async & await, JS engine waits for the promise to fulfill and then it goes to next line
  /* 2 scenarios: 
    -> when prom1 is set to 10 sec and prom2 is set to 5 sec
      So considering the flow of program prom1 is called first, so rest of program has to wait for prom1 to resolve
      and then prom2 (which is already resolved and waiting), it will get to next line. prom1 and prom2 prints at 10 sec
    -> when prom1 is set to 5 sec and prom2 is set to 10 sec
      So considering the flow of program prom1 is called first, prom1 will get resolved and prints it, it doesn't have to wait for prom2
      Then prom2 it will get to next line and prints prom2 lines
      Here first prom1 lines are printed at 5 sec and prom2 will be printed at 10 sec

      Another thing to remember:
      when the function asyncAwait() is in call stack,
      execution gets to the line await promise, then the promise needs to be fulfilled, until then the function itself is suspended from call stack.
      when the promise is fulfilled, the JS call stack will immediately execute the next lines of the function.
  */
async function asyncAwait(){
  console.log("async await");
  const val = await prom1;
  console.log("TanujVeera")
  console.log(val);

  const val1 = await prom2;
  console.log("TanujVeera")
  console.log(val1);
}

asyncAwait();