let count = 0;

let countEl = document.getElementById("count-el");

function incrementCount() {
   count += 1;
   console.log(count);
   countEl.innerText = count;
}

document.getElementById("count-el").innerText = count;
