import { example }
    from './data.js';
import data from './data/pokemon/pokemon.js';

const poke = data.pokemon;
const pokeOrdem = data.pokemon;

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
console.log(ordenar)
ordenar.addEventListener("change", function () {
    let ordem = ""
    console.log("passou")
    if (ordenar.value == "ordemA-Z") {
        ordem = pokeOrdem.sort(function (a, b) {

            return (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0);

        });
    } else if (ordenar.value == "ordemZ-A") {
        ordem = pokeOrdem.sort(function (a, b) {

            return (a.name < b.name) ? 1 : ((b.name < a.name) ? -1 : 0);

        });
    } else{
        ordem = pokeOrdem.sort(function (a, b) {

            return (a.num > b.num) ? 1 : ((b.num > a.num) ? -1 : 0);

        });
    }
    imprimir(ordem);
});


