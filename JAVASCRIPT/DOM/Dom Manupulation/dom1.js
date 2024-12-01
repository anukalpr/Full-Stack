// let heading=document.body.childNodes[3].innerText="Anukalp";
// let heading=document.getElementById("heading");
// console.dir(heading);//return element#id_name
// let topic = document.getElementsByClassName("Topic");
// console.dir(topic);//return HTML Collection
// let btn = document.getElementsByTagName("button");
// console.dir(btn);//return HTML collections
// console.dir(heading);
// alert("Hello Coder");
// console.log(window);

// Queary SelectorAll :- return Nodelist.
// let qsel=document.querySelector("p");
// console.dir(qsel);//return element
// let qsel=document.querySelectorAll("p");
// console.dir(qsel);
// let qsel=document.querySelector("#btn");
// console.dir(qsel);//return element#idname
// let qsel=document.querySelectorAll(".heading");
// console.dir(qsel);//return element.classname
// let qsel=document.querySelector(".heading");
// console.dir(qsel);//return element.classname

// Practice 1:-
// let h2 = document.querySelector("h2");
// h2.innerText=h2.innerText + " from Anukalp Raj";
// console.dir(h2.innerText);

//Practice 2:-
// let divs = document.querySelectorAll(".box");
// console.dir(divs);
// let i = 1;
// for (v of divs) {
//     v.innerText = `unique ${i}`;
//     i++;
// }

//Navigation:- it works from top to down.
let div=document.querySelector("div");
console.dir(div.innerText);
console.dir(div.innerHTML);
// div.innerText="Grapes";
// console.log(div.innerText);
// div.innerHTML="<div><i>Anukalp</i></div>";
// console.log(div.innerHTML);

let head=document.querySelector("h1");
console.dir(head.textContent);