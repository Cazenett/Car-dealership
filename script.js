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