let att=document.querySelector("div");
console.dir(att);
// console.dir(att.getAttribute("class"));
// console.dir(att.getAttribute("name"));
// console.dir(att.setAttribute("name","singh"));
att.style.backgroundColor="red";
// att.style.fontSize="40px";
att.style.height="250px";
// att.style.visibility="hidden";
let h4=document.createElement("h4");
h4.innerText="City:-";
att.prepend(h4);
let btn=document.createElement("button");
btn.innerText="Submit";
att.append(btn);

let h1=document.createElement("h1");
h1.innerText="Hii! I am Anukalp";
att.before(h1);
let p=document.createElement("p");
p.innerText="Bye";
att.after(p);
// att.remove();