function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}

const list = document.getElementById("printing");
let result;

let ul = "<ul>"
do {
    result = rollDice();
    list.innerHTML += "<li>" + result + "</li>";
} while (result !== 6);
ul += "</ul>"