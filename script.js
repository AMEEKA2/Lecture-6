// LECTURE 6 - DOM

// 1. Select by ID
let heading = document.getElementById("heading");
console.log(heading);

// 2. Select by Class
let myClass = document.getElementsByClassName("myClass");
console.log(myClass);

// 3. Select by Tag
let paras = document.getElementsByTagName("p");
console.log(paras);

// 4. Query Selector 
let firstPara = document.querySelector("p"); // first p
console.log(firstPara);

let allParas = document.querySelectorAll("p"); // all p
console.log(allParas);

let myBtn = document.querySelector("#myBtn"); // id ke liye #
console.log(myBtn);

// Properties

// tagName
console.log(heading.tagName);

// innerText 
console.log(heading.innerText);

// innerHTML 
console.log(heading.innerHTML);

// textContent 

// Practice Qs - H2 heading banao "Hello JavaScript", usme "from Apna College students" append karo

let h2 = document.querySelector("h4");
console.log(h2.innerText);

h2.innerText = h2.innerText + " from Apna College students";
console.log(h2.innerText);

// Qs2
let divs = document.querySelectorAll("p"); // agar 3 divs hote toh
// divs[0].innerText = "new unique value 1";
// divs[1].innerText = "new unique value 2";
// divs[2].innerText = "new unique value 3";

// Attribute get / set

let myId = document.querySelector("#heading");
console.log(myId.getAttribute("id"));

myId.setAttribute("id", "newHeading");
console.log(myId.getAttribute("id"));

// Style

let myHeading = document.querySelector("#heading");
myHeading.style.backgroundColor = "yellow";
myHeading.style.color = "blue";

// Insert Elements - create karna

let newBtn = document.createElement("button");
newBtn.innerText = "Click me!";
console.log(newBtn);

// append, prepend, before, after
// document.querySelector("body").append(newBtn);
// document.querySelector("body").prepend(newBtn);
// document.querySelector("body").before(newBtn);
// document.querySelector("body").after(newBtn);

// Remove
// newBtn.remove();

// Practice - Create a new button, red background, text "click me", insert as first element of body

let newButton = document.createElement("button");
newButton.innerText = "click me";
newButton.style.backgroundColor = "red";
newButton.style.color = "white";

document.querySelector("body").prepend(newButton);

