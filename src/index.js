function book() {
  let name = prompt("What is you name?");
  name = name.toLowerCase();
  name = name.trim();
  let email = prompt("What is your email adress?");
  email = email.toLowerCase();
  email = email.trim();
  alert("Thank you " + name + "! We´ll be in touch very soon! 👩‍💻");
}
function travel() {
  let travel = prompt("Have you been to Gothenburg before?");
  if (travel === "Yes") {
    alert("Hope you visit us soon again!");
  } else {
    alert("No time to waste, book your ticket today!");
  }
}
let button = document.querySelector("button");
button.addEventListener("click", book);

let h1 = document.querySelector("h1");
h1.addEventListener("click", travel);
