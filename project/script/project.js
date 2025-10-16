
document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector(".newsletter-form");

    form.addEventListener("submit", (event) => {
        event.preventDefault();
        window.location.href = "confirmation.html";
    });
});

const hardwareList = [
    {
        name: "Logitech G PRO Flight Yoke System",
        type: "yoke",
        desc: "Professional simulation yoke and throttle quadrant with 75 programmable controls.",
        price: "$249.99",
        imageUrl: "https://m.media-amazon.com/images/I/617jFKy4zcL._AC_SY355_.jpg"
    },
    {
        name: "Honeycomb Alpha Flight Simulator Yoke",
        type: "yoke",
        desc: "Realistic full 180° yoke rotation with a solid steel shaft and dual linear ball bearings.",
        price: "$299.99",
        imageUrl: "https://m.media-amazon.com/images/I/61arHxXosfL._AC_SX342_SY445_QL70_ML2_.jpg"
    },
    {
        name: "Turtle Beach VelocityOne Flight Yoke & Throttle Combo",
        type: "yoke",
        desc: "Universal control system with integrated avionics panel and throttle quadrant.",
        price: "$379.95",
        imageUrl: "https://m.media-amazon.com/images/I/51-GWQqeAzL._AC_SY300_SX300_QL70_ML2_.jpg"
    },
    {
        name: "Logitech G Flight Rudder Pedals",
        type: "pedals",
        desc: "Self-centering rudder pedals with adjustable tension dial for realistic control.",
        price: "$149.99",
        imageUrl: "https://m.media-amazon.com/images/I/716zqK+Q6CL._AC_SX342_SY445_QL70_ML2_.jpg"
    },
    {
        name: "Thrustmaster T.Flight Rudder Pedals",
        type: "pedals",
        desc: "Rudder pedals with S.M.A.R.T technology for precise control.",
        price: "$129.99",
        imageUrl: "https://m.media-amazon.com/images/I/51a2SamYb3L._AC_SX342_SY445_QL70_ML2_.jpg"
    },
    {
        name: "HP Reverb G2 VR Headset",
        type: "vr",
        desc: "High-resolution VR headset with spatial audio and precise tracking.",
        price: "$599.99",
        imageUrl: "https://m.media-amazon.com/images/I/61uXZ64NNdL._AC_SY300_SX300_QL70_ML2_.jpg"
    },
    {
        name: "Meta Quest 2 VR Headset",
        type: "vr",
        desc: "All-in-one VR headset with a wide range of immersive experiences.",
        price: "$299.99",
        imageUrl: "https://m.media-amazon.com/images/I/51MbNHHGNXL._AC_SL1500_.jpg"
    },
];

const container = document.getElementById("hardware-container");
const select = document.getElementById("hardware-select");

function renderHardware(filterType = "all") {
    container.innerHTML = ""; 

    const filtered = filterType === "all"
        ? hardwareList
        : hardwareList.filter(item => item.type === filterType);

    filtered.forEach(item => {
        const card = document.createElement("div");
        card.classList.add("card"); 
        card.innerHTML = `
            <img src="${item.imageUrl}" alt="${item.name}" loading="lazy">
            <h4>${item.name}</h4>
            <p>${item.desc}</p>
            <p><strong>Price:</strong> ${item.price}</p>
            <a href="#" class="btn small">See Options</a>
        `;
        container.appendChild(card);
    });
}


select.addEventListener("change", (e) => {
    renderHardware(e.target.value);
});

renderHardware();









    