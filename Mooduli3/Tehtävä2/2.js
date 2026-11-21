const element = document.getElementById("target")

const list = document.createElement("li")
const list1 = document.createElement("li")
const list2 = document.createElement("li")
list.textContent= "First Item"
list1.textContent= "Second Item"
list2.textContent = "Third Item"

target.appendChild(list)
target.appendChild(list1)
target.appendChild(list2)

list1.classList.add("my-item")


