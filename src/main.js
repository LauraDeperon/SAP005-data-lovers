import { calculoAgregado, filtroTipo, ordenarPoke, pesquisarPoke }
    from './data.js';
import data from './data/pokemon/pokemon.js';

const poke = data.pokemon;
const pcMewtwo = Number(poke[149].stats["max-cp"]);

function imprimir(pokemon) {
    const listaPokemon = document.getElementById("listaPokemon");
    listaPokemon.innerHTML = "";

    for (let teste of pokemon) {
        const listaCards = document.createElement("div");
        listaCards.classList.add("flip-container");
        const flip = document.createElement("div");
        flip.classList.add("flipper");
        const card = document.createElement("div");
        card.classList.add("front");
        const versoCard = document.createElement("div");
        versoCard.classList.add("back");
        const h2 = document.createElement("h2");
        const imagem = document.createElement("img");
        const numero = document.createElement("span");
        const tipo = document.createElement("p");
        const raridade = document.createElement("p");
        const fraquezas = document.createElement("p");
        const resistencias = document.createElement("p");
        const maximoPC = document.createElement("p");
        const calculoPCMax = document.createElement("footer");
        const pcMax = Number(teste.stats["max-cp"]);
        const calculoPC = calculoAgregado(pcMax, pcMewtwo);

        imagem.src = teste.img;
        h2.innerHTML = teste.name;
        numero.innerHTML = "#".bold() + teste.num.bold();
        tipo.innerHTML = "Tipo: ".bold() + teste.type;
        raridade.innerHTML = "Raridade: ".bold() + teste["pokemon-rarity"];
        fraquezas.innerHTML = "Fraqueza: ".bold() + teste.weaknesses;
        resistencias.innerHTML = "Resistência: ".bold() + teste.resistant;
        calculoPCMax.innerHTML = "Esse pokemon tem um PC Máximo de " + String(calculoPC).bold() + "%".bold() + " em relação ao pokemon com maior PC Máximo da 1ª geração(Mewtwo).";
        maximoPC.innerHTML = "PC Máximo: ".bold() + teste.stats["max-cp"];

        card.appendChild(h2);
        card.appendChild(imagem);
        card.appendChild(numero);
        card.appendChild(tipo);
        card.appendChild(raridade);

        versoCard.appendChild(fraquezas);
        versoCard.appendChild(resistencias);

        function evolution(evolucao) {
            let escrita = ""
            if (evolucao === "next-evolution") {
                escrita = "Próxima Evolução: ".bold();
            } else {
                escrita = "Pré-Evolução: ".bold();
            }
            if (teste.evolution[evolucao]) {
                const proxEvolucao = document.createElement("p");
                proxEvolucao.innerHTML = escrita + teste.evolution[evolucao][0].name;
                versoCard.appendChild(proxEvolucao);
                if (teste.evolution[evolucao][0][evolucao]) {
                    const proxEvolucao2 = document.createElement("p");
                    proxEvolucao2.innerHTML = escrita + teste.evolution[evolucao][0][evolucao][0].name;
                    versoCard.appendChild(proxEvolucao2);
                }
            }
        }
        evolution("prev-evolution");
        evolution("next-evolution");

        versoCard.appendChild(maximoPC);
        versoCard.appendChild(calculoPCMax);
        flip.appendChild(card);
        flip.appendChild(versoCard);
        listaCards.appendChild(flip);
        listaPokemon.appendChild(listaCards);
    }
}

imprimir(poke);

const ordenar = document.getElementById("ordenar");
ordenar.addEventListener("change", function selecionarOrdem() {
    const selecaoOrdem = document.getElementById("ordenar").value;
    const ordens = ordenarPoke(poke, selecaoOrdem);
    imprimir(ordens);
});

const filtrar = document.getElementById("filtroTipo");
filtrar.addEventListener("change", function filtrarTipo() {
    const selecaoFiltro = document.getElementById("filtroTipo").value;
    const filtros = filtroTipo(poke, selecaoFiltro);
    if (selecaoFiltro == "") {
        imprimir(poke);
    } else {
        imprimir(filtros);
    }
});

const inputPesquisar = document.getElementById("pesquisar")
inputPesquisar.addEventListener("keyup", function filtrarNome() {
    const nomePoke = String(document.getElementById("pesquisar").value);
    const pesquisar = pesquisarPoke(poke, nomePoke);
    if (nomePoke == "") {
        imprimir(poke);
    } else {
        imprimir(pesquisar);
    }
});
