//import { example } from './data.js';

import data from './data/pokemon/pokemon.js';

let poke = data.pokemon;

window.onload = imprimir;

function imprimir() {



    for (let teste of poke) {
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
        document.getElementById("listaPokemon").appendChild(card);

    }

}