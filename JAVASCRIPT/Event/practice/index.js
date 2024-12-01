let btn=document.querySelector("#btn");
let body=document.querySelector("body");
let changeMode="dark";
btn.addEventListener("click",()=>{
    if(changeMode==="dark"){
        changeMode="light";
        body.style.backgroundColor="black";
    }
    else{
        changeMode="dark";
        body.style.backgroundColor="white";
    }
});