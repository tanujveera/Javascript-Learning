//Real LIfe example for async await

// const api_url = "https://api.github.com/users/tanujveera";
const api_url = "https://jadshgfhadsf.com"

async function asyncPromise(){
  /* Getting the data from api
     We get a Response object
     From that object we can take json/text
  */
  const data = await fetch(api_url)
  // fetch() is like a promise which gives Response object
  //fetch() => Response.json() => jsonValue
  const jsonValue = await data.json();
  console.log(jsonValue);
}

asyncPromise();

//Simplified version of above function
async function asyncSimplePromise(){
  await fetch(api_url).then(r => r.json()).then(s => console.log(s));
}
asyncSimplePromise();

//Using try catch to handle exceptions
async function tryCatchAsync(){
  try{
    const data = await fetch(api_url);
    const jsonValue = await data.json();
    console.log(jsonValue);
  }
  catch(err){
    console.log("Invalid URL");
  }
}

tryCatchAsync();