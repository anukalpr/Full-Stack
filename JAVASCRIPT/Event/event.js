// let btn=document.querySelector(".btn");
// btn.onclick=()=>{
//     console.log("clicked");
// }
// let btn1=document.querySelector(".btn1");
// btn1.ondblclick=()=>{
//     console.log("clicked by 2x");
// }
// let box=document.querySelector(".box");
// box.onmouseover=()=>{
//     console.log("u r in the house");
// }
// box.onmouseover=()=>{
//     console.log("welcome to house");
// }

//Event Listner:-
let btn=document.querySelector(".btn");
btn.addEventListener("click" ,(e)=>{
    console.log("clicked!-handler1");
    // console.log(e.type);
});
btn.addEventListener("click" ,(e)=>{
    console.log("clicked!-handler2");
    // console.log(e.target);
});
const hand3=()=>{
    console.log("clicked!-handler3");
}
btn.addEventListener("click" , hand3);
btn.addEventListener("click" ,(e)=>{
    console.log("clicked!-handler4");
});

//remove eventlistener:
btn.removeEventListener("click",hand3);

