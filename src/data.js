

export const ordenarPoke = (poke,selecaoOrdem) => {
  const ordemAZ = (a, b) => (a["name"]).localeCompare(b["name"]);
  const ordemZA = (a, b) => (a["name"]).localeCompare(b["name"]);
  const ordemCrescente = (a, b) => (a["num"]).localeCompare(b["num"]);
  switch(selecaoOrdem){
    case "ordemA-Z":
      return poke.sort((a,b) => ordemAZ(a, b));
    case "ordemZ-A":
      return poke.sort((a,b) => ordemZA(a, b)).reverse();
    case "ordemCrescente":
      return poke.sort((a,b) => ordemCrescente(a, b));
  }
};

export const filtroTipo = (poke, selecaoFiltro) =>
  poke.filter(indice => indice.type.includes(selecaoFiltro));



export const pesquisarPoke = (poke, nomePoke) =>{
  return poke.filter(indice => indice.name.toLowerCase().includes(nomePoke.toLowerCase()));
}

export const calculoAgregado = (pcMax, pcMewtwo) =>{
  if(typeof pcMax == "number" && typeof pcMewtwo == "number"){
    return Math.round((pcMax * 100)/pcMewtwo)
  }else {
    throw new TypeError();
  }
}