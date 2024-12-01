let newbtn=document.createElement("button");
newbtn.innerText="Click me!";
newbtn.style.backgroundColor="red";
newbtn.style.color="white";
let body=document.querySelector("body");
body.prepend(newbtn);
let p=document.querySelector("p");
p.classList.add("class","parabg");//want to add new css class without override.