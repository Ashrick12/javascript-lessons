// document.getElementById("count-el").innerText = 5;

let count = 0;

function increment() {
   console.log("The button was clicked");
   count += 1;
   document.getElementById("count-el").innerText = count;
}
