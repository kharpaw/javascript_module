//Write a program that asks for the names of six dogs. The program
//  prints dog names to unordered list <ul> in reverse alphabetical order. (2p)

const dogs = []

for (let i = 0; i < 6; i++){
    const user = prompt(`Enter the name of dogs ${i + 1} `)
    dogs.push(user)
}

dogs.sort()
dogs.reverse()

let ul = "<ul>";
for (const dog of dogs) {
    ul += `<li>${dog}</li>`
}
ul += "</ul>"

document.getElementById("printing").innerHTML = ul;