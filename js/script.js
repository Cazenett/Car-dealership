// ==================== DADOS DE TODAS AS GALERIAS ====================
const galleriesData = [
    {
        id: 1,
        title: "Porsche 911 GT3 Touring",
        description: "The Porsche 911 GT3 Touring is a limited production version that combines the extreme performance of the GT3 with a more discreet and elegant design, eliminating the large fixed spoiler in favor of an automatic retractable spoiler to maintain downforce at high speeds.",
        specs: ["Engine: 4.0L Flat-6 Turbo", "Power: 510 hp", "Torque: 470 Nm", "0-100 km/h: 3.4 seconds", "Top speed: 313 km/h"],
        photos: ["assets/Galeria/1 (1).jpg", "assets/Galeria/1 (2).jpg", "assets/Galeria/1 (3).jpg", "assets/Galeria/2 (4).jpg"]
    },
    {
        id: 2,
        title: "Honda Civic Type R",
        description: "The Honda Civic Type R is the fastest sports hatchback in the world, known for its exceptional handling and turbocharged engine.",
        specs: ["Engine: 1.6L Turbo I4", "Power: 185 hp", "Torque: 160 Nm", "0-100 km/h: 6.7 seconds", "Top speed: 235 km/h"],
        photos: ["assets/Galeria/2 (1).jpg", "assets/Galeria/2 (2).jpg", "assets/Galeria/2 (3).jpg", "assets/Galeria/2 (4).jpg"]
    },
    {
        id: 3,
        title: "BMW M3 F80",
        description: "The BMW M3 F80 was the fifth generation of the model, produced between 2014 and 2018, marking the transition from the V8 engine to a 3.0L L6 bi-turbo S55 engine with 431 hp.",
        specs: ["Engine: 3.0L I6 BiTurbo", "Power: 431 hp", "Torque: 550 Nm", "0-100 km/h: 4.3 seconds", "Top speed: 250 km/h"],
        photos: ["assets/Galeria/3 (1).jpg", "assets/Galeria/3 (2).jpg", "assets/Galeria/3 (3).jpg"]
    },
    {
        id: 4,
        title: "BMW M3 G80",
        description: "The new generation of the M3, with an inline-6 turbo engine, rear-wheel drive, and cutting-edge technology for maximum performance.",
        specs: ["Engine: 3.0L I6 BiTurbo", "Power: 510 hp", "Torque: 650 Nm", "0-100 km/h: 3.9 seconds", "Top speed: 290 km/h"],
        photos: ["assets/Galeria/4 (1).jpg", "assets/Galeria/4 (2).jpg", "assets/Galeria/4 (3).jpg"]
    },
    {
        id: 5,
        title: "Lamborghini Aventador SVJ",
        description: "The Lamborghini Aventador SVJ is the most extreme version of the Aventador, featuring a torque vectoring system and advanced aerodynamics.",
        specs: ["Engine: 5.2L V10", "Power: 610 hp", "Torque: 560 Nm", "0-100 km/h: 2.9 seconds", "Top speed: 350 km/h"],
        photos: ["assets/Galeria/5 (1).jpg", "assets/Galeria/5 (2).jpg", "assets/Galeria/5 (3).jpg"]
    },
    {
        id: 6,
        title: "Porsche 911 Carrera",
        description: "The iconic Porsche 911, a symbol of performance and luxury, with decades of evolution and constant innovations.",
        specs: ["Engine: 3.0L Flat-6 Turbo", "Power: 450 hp", "Torque: 530 Nm", "0-100 km/h: 3.5 seconds", "Top speed: 308 km/h"],
        photos: ["assets/Galeria/6 (1).jpg", "assets/Galeria/6 (2).jpg", "assets/Galeria/6 (3).jpg"]
    },
    {
        id: 7,
        title: "BMW M3 F80",
        description: "The BMW M3 F80 was the fifth generation of the model, produced between 2014 and 2018, marking the transition from the V8 engine to a 3.0L L6 bi-turbo S55 engine with 431 hp.",
        specs: ["Engine: 3.0L I6 BiTurbo", "Power: 431 hp", "Torque: 550 Nm", "0-100 km/h: 4.1 seconds", "Top speed: 250 km/h"],
        photos: ["assets/Galeria/7 (1).jpg", "assets/Galeria/7 (2).jpg", "assets/Galeria/7 (3).jpg"]
    },
    {
        id: 8,
        title: "Honda Accord",
        description: "The Honda Accord is a reliable family sedan, known for its efficiency, comfort, and advanced technology.",
        specs: ["Engine: 1.5L Turbo I4", "Power: 192 hp", "Torque: 260 Nm", "0-100 km/h: 7.6 seconds", "Top speed: 200 km/h"],
        photos: ["assets/Galeria/8 (1).jpg", "assets/Galeria/8 (2).jpg", "assets/Galeria/8 (3).jpg", "assets/Galeria/8 (4).jpg"]
    },
    // ==================== NOVAS 8 GALERIAS (Ver Mais) ====================
    {
        id: 9,
        title: "BMW M3 F80",
        description: "",
        specs: ["Engine: ", "Power: ", "Torque: ", "0-100 km/h: ", "Top speed: "],
        photos: ["assets/Galeria/9 (1).jpg", "assets/Galeria/9 (2).jpg", "assets/Galeria/9 (3).jpg"]
    },
    {
        id: 10,
        title: "Porsche 911 GT3 RS",
        description: "The Porsche 911 GT3 RS is a track-focused variant with a naturally aspirated flat-6 engine and aggressive aerodynamics.",
        specs: ["Engine: 3.8L Flat-6", "Power: 520 hp", "Torque: 440 Nm", "0-100 km/h: 3.2 seconds", "Top speed: 331 km/h"],
        photos: ["assets/Galeria/10 (1).jpg", "assets/Galeria/10 (2).jpg", "assets/Galeria/10 (3).jpg", "assets/Galeria/10 (4).jpg"]
    },
    {
        id: 11,
        title: "Porsche 718 boxster",
        description: "The Porsche 718 Boxster is a mid-engine sports car that offers a perfect balance of performance and handling, with a turbocharged flat-4 engine.",
        specs: ["Engine: 2.5L Flat-4 Turbo", "Power: 585 hp", "Torque: 700 Nm", "0-100 km/h: 3.6 seconds", "Top speed: 318 km/h"],
        photos: ["assets/Galeria/11 (1).jpg", "assets/Galeria/11 (2).jpg", "assets/Galeria/11 (3).jpg", "assets/Galeria/11 (4).jpg"]
    },
    {
        id: 12,
        title: "Porsche 911 GT3 RS",
        description: " ",
        specs: ["Engine: 3.8L Flat-6", "Power: 600 hp", "Torque: 652 Nm", "0-100 km/h: 2.8 seconds", "Top speed: 315 km/h"],
        photos: ["assets/Galeria/12 (1).jpg", "assets/Galeria/12 (2).jpg", "assets/Galeria/12 (3).jpg", "assets/Galeria/12 (4).jpg"]
    },
    {
        id: 13,
        title: "BMW M3 G80",
        description: " ",
        specs: ["Engine: 3.0L I6 Turbo", "Power: 495 hp", "Torque: 637 Nm", "0-100 km/h: 3.0 seconds", "Top speed: 312 km/h"],
        photos: ["assets/Galeria/13 (1).jpg", "assets/Galeria/13 (2).jpg", "assets/Galeria/13 (3).jpg"]
    },
    {
        id: 14,
        title: "Ferrari 488 pista",
        description: " The Ferrari 488 Pista is a high-performance version of the 488 GTB, featuring a more powerful V8 engine and advanced aerodynamics for track performance.",
        specs: ["Engine: 3.9L V8", "Power: 720 hp", "Torque: 770 Nm", "0-100 km/h: 2.9 seconds", "Top speed: 341 km/h"],
        photos: ["assets/Galeria/14 (1).jpg", "assets/Galeria/14 (2).jpg", "assets/Galeria/14 (3).jpg"]
    },
    {
        id: 15,
        title: "Porsche 911 Turbo S",
        description: "The Porsche 911 Turbo S is the most powerful and fastest version of the 911, with a twin-turbo flat-6 engine and all-wheel drive for maximum performance.",
        specs: ["Engine: 3.8L Flat-6", "Power: 650 hp", "Torque: 650 Nm", "0-100 km/h: 2.7 seconds", "Top speed: 330 km/h"],
        photos: ["assets/Galeria/15 (1).jpg", "assets/Galeria/15 (2).jpg", "assets/Galeria/15 (3).jpg", "assets/Galeria/15 (4).jpg"]
    },
    {
        id: 16,
        title: "Golf R",
        description: "The Golf R is the high-performance version of the Volkswagen Golf, featuring a turbocharged inline-4 engine and all-wheel drive for sporty driving dynamics.",
        specs: ["Engine: 2.0L Inline-4 Turbo", "Power: 382 hp", "Torque: 500 Nm", "0-100 km/h: 3.9 seconds", "Top speed: 250 km/h"],
        photos: ["assets/Galeria/16 (1).jpg", "assets/Galeria/16 (2).jpg", "assets/Galeria/16 (3).jpg"]
    }
];

// ==================== ESTADO GLOBAL ====================
let currentIndices = {};

// ==================== FUNÇÕES REUTILIZÁVEIS ====================
function getCar(id) {
    return galleriesData.find(car => car.id === id);
}

function criarMiniaturas(id) {
    const car = getCar(id);
    if (!car) return;

    const miniatureDiv = document.getElementById(`miniature-${id}`);
    miniatureDiv.innerHTML = "";

    car.photos.forEach((src, index) => {
        const img = document.createElement("img");
        img.src = src;
        img.onclick = () => trocarPara(id, index);
        if (index === 0) img.classList.add("active");
        miniatureDiv.appendChild(img);
    });
}

function atualizarGaleria(id) {
    const car = getCar(id);
    if (!car) return;

    const indice = currentIndices[id];
    const mainPhoto = document.getElementById(`main-photo-${id}`);
    const counter = document.getElementById(`counter-${id}`);
    const miniatureImgs = document.querySelectorAll(`#miniature-${id} img`);

    // Atualiza foto principal
    mainPhoto.src = car.photos[indice];

    // Atualiza contador
    counter.textContent = `${indice + 1} / ${car.photos.length}`;

    // Atualiza borda ativa nas miniaturas
    miniatureImgs.forEach((img, i) => {
        img.classList.toggle("active", i === indice);
    });
}

function proxima(id) {
    const car = getCar(id);
    if (!car) return;
    const len = car.photos.length;
    currentIndices[id] = (currentIndices[id] + 1) % len;
    atualizarGaleria(id);
}

function anterior(id) {
    const car = getCar(id);
    if (!car) return;
    const len = car.photos.length;
    currentIndices[id] = (currentIndices[id] - 1 + len) % len;
    atualizarGaleria(id);
}

function trocarPara(id, index) {
    const car = getCar(id);
    if (!car) return;
    currentIndices[id] = index;
    atualizarGaleria(id);
}

// ==================== MODAL ====================
function openDetails(id) {
    const car = getCar(id);
    if (!car) return;

    const modal = document.getElementById('details-modal');
    const title = document.getElementById('car-title');
    const description = document.getElementById('car-description');
    const specs = document.getElementById('car-specs');

    title.textContent = car.title;
    description.textContent = car.description;
    specs.innerHTML = car.specs.map(spec => `<li>${spec}</li>`).join('');

    modal.style.display = 'block';
}

function closeDetails() {
    document.getElementById('details-modal').style.display = 'none';
}

window.onclick = function(event) {
    const modal = document.getElementById('details-modal');
    if (event.target === modal) closeDetails();
};

function toggleMoreGalleries() {
    const moreSection = document.getElementById('galleries-more');
    const button = document.getElementById('ver-mais-btn');
    if (!moreSection || !button) return;

    const isHidden = moreSection.classList.toggle('hidden');
    button.textContent = isHidden ? 'View more ⬇️' : 'View less ⬆️';
}

// ==================== INICIALIZAÇÃO ====================
function initGalleries() {
    galleriesData.forEach(car => {
        currentIndices[car.id] = 0;
        criarMiniaturas(car.id);
        atualizarGaleria(car.id);
    });
}

// Inicia tudo quando a página carregar
window.addEventListener('load', initGalleries);