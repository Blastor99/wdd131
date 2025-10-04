const year = document.querySelector("#year");
const today = new Date();
year.innerHTML = `<span class="highlight">${today.getFullYear()}</span>`;


const displayElement = document.getElementById("lastModified");
displayElement.textContent = ` ${new Date().toDateString()}`;

/*Windchill calculator*/

function calculateWindChill(t, v) {
    
    return (13.12 + 0.6215 * t - 11.37 * Math.pow(v, 0.16) + 0.3965 * t * Math.pow(v, 0.16)).toFixed(1);

}

/*conditions to calculate windchill*/

document.addEventListener("DOMContentLoaded", () => {

    /*This section transforms text on number*/
    const temp = parseFloat(document.getElementById("temp").textContent.match(/-?\d+/)[0]);
    const wind = parseFloat(document.getElementById("wind").textContent.match(/-?\d+/)[0]);

    document.getElementById("windchill").textContent =
        (temp <= 10 && wind > 4.8) ? calculateWindChill(temp, wind) + " °C" : "N/A";
});

