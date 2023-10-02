//Promises
/*The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
A Promise is a proxy for a value not necessarily known when the promise is created. It allows you to associate handlers with an asynchronous action's eventual success value or failure reason. This lets asynchronous methods return values like synchronous methods: instead of immediately returning the final value, the asynchronous method returns a promise to supply the value at some point in the future.

In other words, it is a placeholder/ container for a future value when promise is fulfilled
*/

// //then function can be used for promise and attach a callback function
// promise.then(function(orderId){
//   paymentOrder(orderId);
// });

const GITHUB_API = "https://api.github.com/users/tanujveera";

/*
Promises have 3 states
1) pending: neither fulfilled or rejected, it is at initial state
2)fulfilled: promise is fulfilled and operation is successful
3)rejected: the promise is rejected and the operation is failed
*/
//fetch is async operation
const userDetails = fetch(GITHUB_API);

console.log(userDetails);

//promise state is set based on the operation
userDetails.then(function (users) {
  console.log(users);
});

//Lean code instead of 22-29 lines
fetch(GITHUB_API).then(function(users){
  console.log(users)
});
//More lean code
fetch(GITHUB_API).then(users => console.log(users));