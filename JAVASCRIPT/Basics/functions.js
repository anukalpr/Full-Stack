function sum(a,b){
    let sum=a+b;
    console.log(sum);
}
sum(2,5);
function mul(a,b){
    let mul=a*b;
    return mul;
}
mul(2,5);
function divide(a,b){
    let divide=a/b;
    return divide;
}
console.log(divide(10,5));
function print(msg,n){
   console.log( msg*n);//NaN
}
print("Anukalp",10);
// Arrow Function
let sub = ((a,b)=>{
    return a-b;
});
// sub(10,2);
// we can initialise sub also becouse it is work as a var
// sub=10;

// Callback function:-A function that pass as a argument of another function.
let arr=[1,2,3,4];
arr.forEach((val,idx,arr)=>{
    console.log(val,idx,arr);
});

// function add(a,b){
//     return a+b;
// }
let add=((a,b)=>{
    return a+b;
});
function print(add){
    return add;
}
print(add);

//array.map:-
// let newArr=arr.map(function square(a){
//     return a**2;
// });
let newArr=arr.map((val)=>{
    return val**2;
});
console.log(newArr);

// array.filter:-
let evenArr=arr.filter((val)=>{
    return val%2===0;
})
console.log(evenArr);
let oddArr=arr.filter(function odd(val){
    return val%2!==0;
});
console.log(oddArr);

// array.reduce:-
let summation=arr.reduce((pre,curr)=>{
    return pre+curr;
});
console.log(summation);
let maxVal=arr.reduce(function max(pre,curr){
    return pre>curr?pre:curr;
});
console.log(maxVal); 