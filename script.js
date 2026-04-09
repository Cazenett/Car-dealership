// ARRAYS DE FOTOS
const photoCar1 = [
    "assets/Galeria/161 (1).jpg",
    "assets/Galeria/161 (2).jpg",
    "assets/Galeria/161 (3).jpg",
    "assets/Galeria/161 (4).jpg"
];

const photoCar2 = [
    "assets/Galeria/152 (1).jpg",
    "assets/Galeria/152 (2).jpg",
    "assets/Galeria/152 (3).jpg",
    "assets/Galeria/152 (4).jpg"
];

const photoCar3 = [
    "assets/Galeria/42 (1).jpg",
    "assets/Galeria/42 (2).jpg",
    "assets/Galeria/42 (3).jpg",
];

const photoCar4 = [
    "assets/Galeria/98 (1).jpg",
    "assets/Galeria/98 (2).jpg",
    "assets/Galeria/98 (3).jpg",
];

const photoCar5 = [
    "assets/Galeria/48 (1).jpg",
    "assets/Galeria/48 (2).jpg",
    "assets/Galeria/48 (3).jpg",
];

const photoCar6 = [
    "assets/Galeria/50 (1).jpg",
    "assets/Galeria/50 (2).jpg",
    "assets/Galeria/50 (3).jpg",
];

const photocar7 = [
    "assets/Galeria/52 (1).jpg",
    "assets/Galeria/52 (2).jpg",
    "assets/Galeria/52 (3).jpg",
];

const photoCar8 = [
    "assets/Galeria/54 (1).jpg",
    "assets/Galeria/54 (2).jpg",
    "assets/Galeria/54 (3).jpg",
    "assets/Galeria/54 (4).jpg",
];

let indiceAtual1 = 0;
let indiceAtual2 = 0;
let indiceAtual3 = 0;
let indiceAtual4 = 0;
let indiceAtual5 = 0;
let indiceAtual6 = 0;
let indiceAtual7 = 0;
let indiceAtual8 = 0;
function criarMiniaturas(numero) {
    let fotos;
    if (numero === 1) fotos = photoCar1;
    else if (numero === 2) fotos = photoCar2;
    else if (numero === 3) fotos = photoCar3;
    else if (numero === 4) fotos = photoCar4;
    else if (numero === 5) fotos = photoCar5;
    else if (numero === 6) fotos = photoCar6;
    else if (numero === 7) fotos = photocar7;
    else if (numero === 8) fotos = photoCar8;
    const miniatureDiv = document.getElementById(`miniature-${numero}`);

    miniatureDiv.innerHTML = "";

    fotos.forEach((src, index) => {
        const img = document.createElement("img");
        img.src = src;
        img.onclick = () => trocarPara(numero, index);
        if (index === 0) img.classList.add("active");
        miniatureDiv.appendChild(img);
    });
}

function atualizarGaleria(numero) {
    let fotos, indice;
    if (numero === 1) { fotos = photoCar1; indice = indiceAtual1; }
    else if (numero === 2) { fotos = photoCar2; indice = indiceAtual2; }
    else if (numero === 3) { fotos = photoCar3; indice = indiceAtual3; }
    else if (numero === 4) { fotos = photoCar4; indice = indiceAtual4; }
    else if (numero === 5) { fotos = photoCar5; indice = indiceAtual5; }
    else if (numero === 6) { fotos = photoCar6; indice = indiceAtual6; }
    else if (numero === 7) { fotos = photocar7; indice = indiceAtual7; }
    else if (numero === 8) { fotos = photoCar8; indice = indiceAtual8; }
    
    // Atualiza foto principal
    document.getElementById(`main-photo-${numero}`).src = fotos[indice];

    // Atualiza contador
    document.getElementById(`counter-${numero}`).textContent = `${indice + 1} / ${fotos.length}`;

    // Atualiza borda ativa nas miniaturas
    document.querySelectorAll(`#miniature-${numero} img`).forEach((img, i) => {
        img.classList.toggle("active", i === indice);
    });
}

function proxima(numero) {
    if (numero === 1) {
        indiceAtual1 = (indiceAtual1 + 1) % photoCar1.length;
    } else if (numero === 2) {
        indiceAtual2 = (indiceAtual2 + 1) % photoCar2.length;
    } else if (numero === 3) {
        indiceAtual3 = (indiceAtual3 + 1) % photoCar3.length;
    } else if (numero === 4) {
        indiceAtual4 = (indiceAtual4 + 1) % photoCar4.length;
    } else if (numero === 5) {
        indiceAtual5 = (indiceAtual5 + 1) % photoCar5.length;
    } else if (numero === 6) {
        indiceAtual6 = (indiceAtual6 + 1) % photoCar6.length;
    } else if (numero === 7) {
        indiceAtual7 = (indiceAtual7 + 1) % photocar7.length;
    } else if (numero === 8) {
        indiceAtual8 = (indiceAtual8 + 1) % photoCar8.length;
    }
    atualizarGaleria(numero);
}

function anterior(numero) {
    if (numero === 1) {
        indiceAtual1 = (indiceAtual1 - 1 + photoCar1.length) % photoCar1.length;
    } else if (numero === 2) {
        indiceAtual2 = (indiceAtual2 - 1 + photoCar2.length) % photoCar2.length;
    } else if (numero === 3) {
        indiceAtual3 = (indiceAtual3 - 1 + photoCar3.length) % photoCar3.length;
    } else if (numero === 4) {
        indiceAtual4 = (indiceAtual4 - 1 + photoCar4.length) % photoCar4.length;
    } else if (numero === 5) {
        indiceAtual5 = (indiceAtual5 - 1 + photoCar5.length) % photoCar5.length;
    } else if (numero === 6) {
        indiceAtual6 = (indiceAtual6 - 1 + photoCar6.length) % photoCar6.length;
    } else if (numero === 7) {
        indiceAtual7 = (indiceAtual7 - 1 + photocar7.length) % photocar7.length;
    } else if (numero === 8) {
        indiceAtual8 = (indiceAtual8 - 1 + photoCar8.length) % photoCar8.length;
    }
    atualizarGaleria(numero);
}

function trocarPara(numero, index) {
    if (numero === 1) indiceAtual1 = index;
    else if (numero === 2) indiceAtual2 = index;
    else if (numero === 3) indiceAtual3 = index;
    else if (numero === 4) indiceAtual4 = index;
    else if (numero === 5) indiceAtual5 = index;
    else if (numero === 6) indiceAtual6 = index;
    else if (numero === 7) indiceAtual7 = index;
    else if (numero === 8) indiceAtual8 = index;
    atualizarGaleria(numero);
}

criarMiniaturas(1);
atualizarGaleria(1);

criarMiniaturas(2);
atualizarGaleria(2);

criarMiniaturas(3);
atualizarGaleria(3);

criarMiniaturas(4);
atualizarGaleria(4);

criarMiniaturas(5);
atualizarGaleria(5);

criarMiniaturas(6);
atualizarGaleria(6);

criarMiniaturas(7);
atualizarGaleria(7); 

criarMiniaturas(8);
atualizarGaleria(8);

// Detalhes dos carros
const carDetails = {
    1: {
        title: "Porsche 911 GT3 Touring",
        description: "The Porsche 911 GT3 Touring is a limited production version that combines the extreme performance of the GT3 with a more discreet and elegant design, eliminating the large fixed spoiler in favor of an automatic retractable spoiler to maintain downforce at high speeds.",
        specs: [
            "Engine: 4.0L Flat-6 Turbo",
            "Power: 510 hp",
            "Torque: 470 Nm",
            "0-100 km/h: 3.4 seconds",
            "Top speed: 313 km/h"
        ]
    },
    2: {
        title: "Honda Civic Type R",
        description: "The Honda Civic Type R is the fastest sports hatchback in the world, known for its exceptional handling and turbocharged engine.",
        specs: [
            "Engine: 1.6L Turbo I4",
            "Power: 185 hp",
            "Torque: 160 Nm",
            "0-100 km/h: 6.7 seconds",
            "Top speed: 235 km/h"
        ]
    },
    3: {
        title: "BMW M3 F80",
        description: "The BMW M3 F80 was the fifth generation of the model, produced between 2014 and 2018, marking the transition from the V8 engine to a 3.0L L6 bi-turbo S55 engine with 431 hp.",
        specs: [
            "Engine: 3.0L I6 BiTurbo",
            "Power: 431 hp",
            "Torque: 550 Nm",
            "0-100 km/h: 4.3 seconds",
            "Top speed: 250 km/h"
        ]
    },
    4: {
        title: "BMW M3 G80",
        description: "The new generation of the M3, with an inline-6 turbo engine, rear-wheel drive, and cutting-edge technology for maximum performance.",
        specs: [
            "Engine: 3.0L I6 BiTurbo",
            "Power: 510 hp",
            "Torque: 650 Nm",
            "0-100 km/h: 3.9 seconds",
            "Top speed: 290 km/h"
        ]
    },
    5: {
        title: "Lamborghini Aventador SVJ",
        description: "The Lamborghini Aventador SVJ is the most extreme version of the Aventador, featuring a torque vectoring system and advanced aerodynamics.",
        specs: [
            "Engine: 5.2L V10",
            "Power: 610 hp",
            "Torque: 560 Nm",
            "0-100 km/h: 2.9 seconds",
            "Top speed: 350 km/h"
        ]
    },
    6: {
        title: "Porsche 911 Carrera",
        description: "The iconic Porsche 911, a symbol of performance and luxury, with decades of evolution and constant innovations.",
        specs: [
            "Engine: 3.0L Flat-6 Turbo",
            "Power: 450 hp",
            "Torque: 530 Nm",
            "0-100 km/h: 3.5 seconds",
            "Top speed: 308 km/h"
        ]
    },
    7: {
        title: "BMW M3 F80",
        description: "The BMW M3 F80 was the fifth generation of the model, produced between 2014 and 2018, marking the transition from the V8 engine to a 3.0L L6 bi-turbo S55 engine with 431 hp.",
        specs: [
            "Engine: 3.0L I6 BiTurbo",
            "Power: 431 hp",
            "Torque: 550 Nm",
            "0-100 km/h: 4.1 seconds",
            "Top speed: 250 km/h"
        ]
    },
    8: {
        title: "Honda Accord",
        description: "The Honda Accord is a reliable family sedan, known for its efficiency, comfort, and advanced technology.",
        specs: [
            "Engine: 1.5L Turbo I4",
            "Power: 192 hp",
            "Torque: 260 Nm",
            "0-100 km/h: 7.6 seconds",
            "Top speed: 200 km/h"
        ]
    }
};

// Funções do modal
function openDetails(carId) {
    const modal = document.getElementById('details-modal');
    const title = document.getElementById('car-title');
    const description = document.getElementById('car-description');
    const specs = document.getElementById('car-specs');

    const details = carDetails[carId];
    title.textContent = details.title;
    description.textContent = details.description;
    specs.innerHTML = details.specs.map(spec => `<li>${spec}</li>`).join('');

    modal.style.display = 'block';
}

function closeDetails() {
    document.getElementById('details-modal').style.display = 'none';
}

// Fechar modal ao clicar fora
window.onclick = function(event) {
    const modal = document.getElementById('details-modal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
}    