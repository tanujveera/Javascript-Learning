//Scope of let, const and var

for(var i=0;i<=3;i++){
  console.log(i); // 0,1,2,3
}
console.log("----------------------");

/*
Since var is global scoped, and setTImeout() is attached with a()
when 1000 ms are done, the value of i is 4 and then all the iterations of i are assigned to 4. 
So that is why it prints 4 four times.
*/
for(var i=0;i<=3;i++){
  const a = () =>{
    console.log(i); // 4,4,4,4
  };
  console.log("---"+i);
  setTimeout(a,1000);
}

console.log("----------------------");

/*
let is block scoped, so it is exclusive for the "for" loop
*/
for(let i=0;i<=3;i++){
  const a = () =>{
    console.log(i); // 0,1,2,3
  };
  console.log("---"+i);
  setTimeout(a,1000);
}