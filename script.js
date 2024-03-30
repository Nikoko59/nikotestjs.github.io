const listOne = document.querySelector(".list1");
let text = document.getElementById("answer");
let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let tit4 = document.querySelector("h4");

document.body.addEventListener("click", myList);

function myList() {
  listOne.style.transform = "scale(1.3)";
}

btn1.addEventListener("click", myTop);

function myTop() {
  text.style.visibility = "visible ";
}

btn2.addEventListener("click", myBest);

function myBest() {
  tit4.textContent = "Chaque Jour , je vais de mieux en mieux ";
}

btn1.addEventListener("submit", () => {
  console.log("test");
});
