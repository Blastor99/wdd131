const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Bogotá Colombia",
        location: "Bogotá, Colombia",
        dedicated: "1999, April, 26",
        area: 53500,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/bogota-colombia-temple/bogota-colombia-temple-7732.jpg"
    },
    {
        templeName: "Bern Switzerland",
        location: "Bern, Switzerland",
        dedicated: "1992, October, 25",
        area: 35546,
        imageUrl: 
            "https://churchofjesuschristtemples.org/assets/img/temples/bern-switzerland-temple/bern-switzerland-temple-12596.jpg"
    },
    {
        templeName: "Concepción Chile",
        location: "Concepción, Chile",
        dedicated: "2018, October, 28",
        area: 23095,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/concepcion-chile-temple/concepcion-chile-temple-273-main.jpg"
    }
];

//select the main//
const main = document.querySelector("main");


temples.forEach(temple => {

    const card = document.createElement("article");
    card.classList.add("temple-card");


    const name = document.createElement("h2");
    name.textContent = temple.templeName;

    const location = document.createElement("p");
    location.innerHTML = `<strong>Location:</strong> ${temple.location}`;

    const dedicated = document.createElement("p");
    dedicated.innerHTML = `<strong>Dedicated:</strong> ${temple.dedicated}`;

    const area = document.createElement("p");
    area.innerHTML = `<strong>Area:</strong> ${temple.area.toLocaleString()} sq ft`;

    const image = document.createElement("img");
    image.src = temple.imageUrl;
    image.alt = temple.templeName;
    image.loading = "lazy";


    card.appendChild(name);
    card.appendChild(image);
    card.appendChild(location);
    card.appendChild(dedicated);
    card.appendChild(area);


    main.appendChild(card);
});

//Mobile Toggle!!//

const toggleButton = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

toggleButton.addEventListener('click', () => {
    navLinks.classList.toggle('show');
});

//Filter temples//

const container = document.querySelector('.temple-container');

function displayTemples(list) {
    container.innerHTML = '';
    list.forEach(temple => {
        container.innerHTML += `
            <div class="temple-card">
                ${temple.imageUrl}
                <h2>${temple.templeName}</h2>
                <p>${temple.location}</p>
                <p>Dedicated: ${temple.dedicated}</p>
                <p>Area: ${temple.area.toLocaleString()} sq ft</p>
            </div>
        `;
    });
}


function getYear(dateStr) {
    return parseInt(dateStr.split(',')[0]);
}

function filterTemples(conditionFn) {
    const cards = document.querySelectorAll('.temple-card');
    cards.forEach(card => {
        const dedicatedText = card.querySelector('p:nth-of-type(2)').textContent;
        const areaText = card.querySelector('p:nth-of-type(3)').textContent;

        const year = getYear(dedicatedText.replace('Dedicated: ', ''));
        const area = parseInt(areaText.replace(/[^0-9]/g, ''));

        if (conditionFn(year, area)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}


document.getElementById('home').addEventListener('click', e => {
    e.preventDefault();
    document.querySelectorAll('.temple-card').forEach(card => card.style.display = 'block');
});

document.getElementById('old').addEventListener('click', e => {
    e.preventDefault();
    filterTemples((year, area) => year < 1900);
});

document.getElementById('new').addEventListener('click', e => {
    e.preventDefault();
    filterTemples((year, area) => year > 2000);
});

document.getElementById('large').addEventListener('click', e => {
    e.preventDefault();
    filterTemples((year, area) => area > 90000);
});

document.getElementById('small').addEventListener('click', e => {
    e.preventDefault();
    filterTemples((year, area) => area < 10000);
});

//FOOTER Last modification//

const year = document.querySelector("#year");
const today = new Date();
year.innerHTML = `<span class="highlight">${today.getFullYear()}</span>`;


const displayElement = document.getElementById("lastModified");
displayElement.textContent = ` ${new Date().toDateString()}`;


