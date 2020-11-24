import { example }
    from './data.js';
import data from './data/pokemon/pokemon.js';

const poke = data.pokemon;

function imprimir(pokemon) {
    const listaPokemon = document.getElementById("listaPokemon");
    listaPokemon.innerHTML = "";

    for (let teste of pokemon) {
        let card = document.createElement("div");
        let h2 = document.createElement("h2");
        let imagem = document.createElement("img");
        let numero = document.createElement("span");
        imagem.src = teste.img
        h2.innerHTML = teste.name
        numero.innerHTML = teste.num
        card.appendChild(h2)
        card.appendChild(imagem)
        card.appendChild(numero)
        listaPokemon.appendChild(card)
    }
}

imprimir(poke);
const ordenar = document.getElementById("ordenar");
ordenar.addEventListener("change", function () {
    let ordem = ""
    if (ordenar.value == "ordemA-Z") {
        ordem = poke.sort(function (a, b) {

            return (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0);

        });
    } else if (ordenar.value == "ordemZ-A") {
        ordem = poke.sort(function (a, b) {

            return (a.name < b.name) ? 1 : ((b.name < a.name) ? -1 : 0);

        });
    } else{
        ordem = poke.sort(function (a, b) {

            return (a.num > b.num) ? 1 : ((b.num > a.num) ? -1 : 0);

        });
    }
    imprimir(ordem);
});

const filtrar = document.getElementById("filtroTipo");
filtrar.addEventListener("change", function () {
    let filtro = ""
    console.log("passou")
   if (filtrar.value == "Water") {
        filtro = poke.filter(function (indice) {

            return indice.type == "water"

        });
        imprimir(filtro);
    } else if (filtrar.value == "Dragon") {
        filtro = poke.filter(function (indice) {

            return indice.type == "dragon"

        });
        imprimir(filtro);
    } else if (filtrar.value == "Electric") {
        filtro = poke.filter(function (indice) {

            return indice.type == "electric"

        });
        imprimir(filtro);
    }else if (filtrar.value == "Fire") {
        filtro = poke.filter(function (indice) {

            return indice.type == "fire"

        });
        imprimir(filtro);
    }else if (filtrar.value == "Grass") {
        filtro = poke.filter(function (indice) {

            return indice.type == "grass"

        });
        imprimir(filtro);
    }else if (filtrar.value == "Bug") {
        filtro = poke.filter(function (indice) {

            return indice.type == "bug"

        });
        imprimir(filtro);
    }else if (filtrar.value == "Figthing") {
        filtro = poke.filter(function (indice) {

            return indice.type == "figthing"

        });
        imprimir(filtro);
    }else if (filtrar.value == "Normal") {
        filtro = poke.filter(function (indice) {

            return indice.type == "normal"

        });
        imprimir(filtro);
    }else if (filtrar.value == "Psychic") {
        filtro = poke.filter(function (indice) {

            return indice.type == "psychic"

        });
        imprimir(filtro);
    }else if (filtrar.value == "Ground") {
        filtro = poke.filter(function (indice) {

            return indice.type == "ground"

        });
        imprimir(filtro);
    }else if (filtrar.value == "Poison") {
        filtro = poke.filter(function (indice) {

            return indice.type == "poison"

        });
        imprimir(filtro);
    }else{
        imprimir(poke);
    }
    
});



