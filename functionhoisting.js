//Function scope in datatypes
//Global Function
a=12;
console.log(a);      //Global function

// Function Scope
function fun(){
    let b=1;
    // console.log(b);
    // if(b===2){
    //     let c=34;
    //     console.log("Inside if loop"+c);   // let gives the value to the block only not outside block
    
    // };
    // console.log("Outside if"+c);

    if(b===1){
        var d=54;
        console.log("Inside if "+d);       //Var gives the value in function block or function scope.
    };
    console.log("outside if "+d);



};

// console.log(b);
// console.log(c);