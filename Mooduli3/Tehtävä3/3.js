'use strict';
const names = ['John', 'Paul', 'Jones'];

const element = document.getElementById("target")

for (const name of names) {
    element.innerHTML += `<li>${name}</li>`
}