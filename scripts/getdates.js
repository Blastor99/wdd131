const year = document.querySelector("#year");
const today = new Date();
year.innerHTML = `<span class="highlight">${today.getFullYear()}</span>`;


let lastModified = document.lastModified;

let displayElement = document.getElementById("lastModified");

displayElement.textContent = ` ${lastModified}`;





