const numbers = []

for (let i = 0; i < 5; i++) {
    let user = prompt(`Enter the number ${i + 1}`)
    numbers.push(Number(user))
}

let result = ""
for (let i = 4; i >= 0; i--){
    console.log(numbers[i])
    result += numbers[i] + " "
}
document.getElementById("printing").innerHTML = "You entered: " + numbers + "<br>"
document.getElementById("printing").innerHTML += "Reverse order: " + result
