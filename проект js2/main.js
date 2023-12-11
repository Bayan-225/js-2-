const elementById = document.querySelector("#id1");
console.log(elementById)

const elementByClass = document.querySelector(".class");
console.log(elementByClass)

const elementByTag = document.querySelector("h2");
console.log(elementByTag)

const elm = document.querySelector('.div');
const elementInsideElement = elm.querySelector("h3");
console.log(elementInsideElement)

elementById.textContent = "новый текст";
elementById.setAttribute("id", "id2");

elementById.style.color = "blue";
elementById.style.backgroundcolor = "lightgray";

elementById.classList.add("new-class");
elementById.classList.remove("old-class");

