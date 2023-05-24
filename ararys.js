let arr =["Apple","Mango","Orange"];
for( let i = 0; i<4;i++){
    console.log("The arrays is "+arr[i]);
};
console.log(arr);

console.log(arr.indexOf("Apple"));

arr.shift("Apple");
console.log(arr);

arr.unshift("Kiwi");
console.log(arr);

arr.push("Banana");
console.log(arr);

arr.pop("Banana");
console.log(arr);