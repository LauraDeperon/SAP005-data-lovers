import { example }
    from './data.js';
import data from './data/pokemon/pokemon.js';

const poke = data.pokemon;
let pcMewtwo = Number(poke[149].stats["max-cp"])

function imprimir(pokemon) {
    const listaPokemon = document.getElementById("listaPokemon");
    listaPokemon.innerHTML = "";
    
    for (let teste of pokemon) {
        let listaCards = document.createElement("div");
        listaCards.classList.add("flip-container");
        let flip = document.createElement("div");
        flip.classList.add("flipper");
        let card = document.createElement("div");
        card.classList.add("front");
        let versoCard = document.createElement("div");
        versoCard.classList.add("back");
        let h2 = document.createElement("h2");
        let imagem = document.createElement("img");
        let numero = document.createElement("span");
        let tipo = document.createElement("p");
        tipo.classList.add("tipo");
        let fraquezas = document.createElement("p");
        let resistencias = document.createElement("p");
        let maximoPC = document.createElement("p");
        let pcMax = teste.stats["max-cp"];
        let calculoPCMax = document.createElement("footer")
        let resultadoPCMax = Number((pcMax * 100)/pcMewtwo).toFixed(2)+"%"
        
        imagem.src = teste.img
        h2.innerHTML = teste.name
        numero.innerHTML = "#".bold() + teste.num.bold()
        tipo.innerHTML = "Tipo: ".bold() + teste.type
        fraquezas.innerHTML = "Fraqueza: ".bold() + teste.weaknesses
        resistencias.innerHTML = "Resistência: ".bold() + teste.resistant
        calculoPCMax.innerHTML = "Esse pokemon tem um PC Máximo de "+String(resultadoPCMax).bold()+" em relação ao pokemon com maior PC Máximo da 1ª geração(Mewtwo)."
        maximoPC.innerHTML = "PC Máximo: ".bold() + teste.stats["max-cp"];
        
        card.appendChild(h2)
        card.appendChild(imagem)
        card.appendChild(numero)
        card.appendChild (tipo)        

        versoCard.appendChild(fraquezas)
        versoCard.appendChild(resistencias)

        if(teste.evolution["next-evolution"]){ 
            let proxEvolucao = document.createElement("p");
            proxEvolucao.innerHTML = "Próxima Evolução: ".bold() + teste.evolution["next-evolution"][0].name
            versoCard.appendChild(proxEvolucao)
                if(teste.evolution["next-evolution"][0]["next-evolution"]){
                    let proxEvolucao2 = document.createElement("p");
                    proxEvolucao2.innerHTML = "Próxima Evolução: ".bold() + teste.evolution["next-evolution"][0]["next-evolution"][0].name
                    versoCard.appendChild(proxEvolucao2)
                }
        }
        
        if(teste.evolution["prev-evolution"]){ 
            let anteriorEvolucao = document.createElement("p");
            anteriorEvolucao.innerHTML = "Evolução Anterior: ".bold() + teste.evolution["prev-evolution"][0].name
            versoCard.appendChild(anteriorEvolucao)
                if(teste.evolution["prev-evolution"][0]["prev-evolution"]){
                    let anteriorEvolucao2 = document.createElement("p");
                    anteriorEvolucao2.innerHTML = "Evolução Anterior: ".bold() + teste.evolution["prev-evolution"][0]["prev-evolution"][0].name
                    versoCard.appendChild(anteriorEvolucao2)
                }
        }
        
        versoCard.appendChild(maximoPC)
        versoCard.appendChild(calculoPCMax)  
        flip.appendChild(card)
        flip.appendChild(versoCard)
        listaCards.appendChild(flip)
        listaPokemon.appendChild(listaCards)
    }
    console.log(listaPokemon)
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
   if (filtrar.value == "Water") {
        filtro = poke.filter(function (indice) {

            return indice.type[0] == "water" 

        });
        imprimir(filtro);
    } else if (filtrar.value == "Dragon") {
        filtro = poke.filter(function (indice) {

            return indice.type[0] == "dragon"

        });
        imprimir(filtro);
    } else if (filtrar.value == "Electric") {
        filtro = poke.filter(function (indice) {

            return indice.type[0] == "electric"

        });
        imprimir(filtro);
    }else if (filtrar.value == "Fire") {
        filtro = poke.filter(function (indice) {

            return indice.type[0] == "fire"

        });
        imprimir(filtro);
    }else if (filtrar.value == "Grass") {
        filtro = poke.filter(function (indice) {

            return indice.type[0] == "grass"

        });
        imprimir(filtro);
    }else if (filtrar.value == "Bug") {
        filtro = poke.filter(function (indice) {

            return indice.type[0] == "bug"

        });
        imprimir(filtro);
    }else if (filtrar.value == "Fighting") {
        filtro = poke.filter(function (indice) {

            return indice.type[0] == "fighting"

        });
        imprimir(filtro);
    }else if (filtrar.value == "Normal") {
        filtro = poke.filter(function (indice) {

            return indice.type[0] == "normal"

        });
        imprimir(filtro);
    }else if (filtrar.value == "Psychic") {
        filtro = poke.filter(function (indice) {

            return indice.type[0] == "psychic"

        });
        imprimir(filtro);
    }else if (filtrar.value == "Ground") {
        filtro = poke.filter(function (indice) {

            return indice.type[0] == "ground"

        });
        imprimir(filtro);
    }else if (filtrar.value == "Poison") {
        filtro = poke.filter(function (indice) {

            return indice.type[0] == "poison"

        });
        imprimir(filtro);
    }else{
        imprimir(poke);
    }
    
});



