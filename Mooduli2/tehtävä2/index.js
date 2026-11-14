const names = [];
const user = parseInt(prompt("Enter number of participants: "));

for (let i = 0; i < user; i++) {
  const name = prompt(`Enter the name of participant ${i + 1}`);
  names.push(name);
}

names.sort((a, b) => a.localeCompare(b));

let ol = "<ol>";
for (const name of names) {
    ol += `<li>${name}</li>`;
}
ol += "</ol>";

document.getElementById("printing").innerHTML = ol;