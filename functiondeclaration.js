//Function can be declared in two ways.
// First way
square_root(10);
square_r(10);
// sqrt_n(10);


function square_root(n){
  let a=Math.sqrt(n);
  console.log("The Sqaure root 1 is "+ a);
  return "HEllo";
  
};

function square_r(n){
    let a=Math.sqrt(n);
    console.log("The Sqaure root 2 is "+ a);
    return "HEllo";

};

// Second Way is 
let sqrt_n= function (m){
    let n = Math.sqrt(m);
    console.log("The Sqaure root 3 is "+ n);
    return  "HEllo";
};

sqrt_n(10);