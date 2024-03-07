let count = 0;

countEl = document.getElementById("count-el");

function incrementCount() {
   count += 1;
   countEl.innerText = count;
}

function save() {
   console.log(count);
}
