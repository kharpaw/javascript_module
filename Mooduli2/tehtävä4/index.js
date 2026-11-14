let numbers = []

let user = parseInt(prompt("Enter the number"))

while (user !== 0) {
    numbers.push(user)
    user = parseInt(prompt("Enter the number"))
}

numbers.sort((a, b) => b - a)

for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i])
}

document.getElementById("printing").innerHTML = numbers