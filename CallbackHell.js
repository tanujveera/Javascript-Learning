//Call back hell(Pyramid of doom):
//Callback Hell is essentially nested callbacks stacked below one another forming a pyramid structure. 
//Every callback depends/waits for the previous callback, thereby making a pyramid structure that affects the readability and maintainability of the code.

//Call back function:
//A function is passed as an argument into another function is call back function.
setTimeout(function y(){
  console.log("Call back function")
},5000);

//Consider there is a website you are purchasing
//There are few tasks performed like order creation, payment, order summary etc. all are dependent on one another.

const cart = ["shirt", "pant", "shoes"];
//Here api is just using the external API and perform few operations

/*
api.createOrder(cart, function (){

  api.paymentOrder(function (){

    api.orderSummary();
  
  })

});

*/

//The process continues and many call backs are called and there is no clarity as to what is happening.

//Inversion of control
//Since the api is external and we don't know whether it will work or not. Control is not in developer's hands (our hands). Thus , the name Inversion of Control.