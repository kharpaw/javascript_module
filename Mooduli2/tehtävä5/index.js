let numbers = []


while (true) {
    let user = parseInt(prompt("Enter the number"))
    if (numbers.includes(user)) {
        console.log("There is the duplicate number")
        break

    }
    numbers.push(user)
}

numbers.sort((a, b) => a - b)
document.getElementById("printing").innerHTML= numbers.join(",  ")