import { calculoAgregado, filtroTipo, ordenarPoke, pesquisarPoke } from '../src/data.js';

const alunas = [{
  "num": "001",
  "name": "Carol",
  "dados": {
    "idade": "27",
    "ano-nascimento": "1993",
    "altura": "172",
    "peso": "62"
  },
  "type": [
   "dança",
   "pintura"
  ]
},
{
  "num": "002",
  "name": "Amanda",
  "dados": {
    "idade": "38",
    "ano-nascimento": "1982",
    "altura": "160",
    "peso": "58"
  },
  "type": [
   "dança",
   "futebol"
  ]
},
{
  "num": "003",
  "name": "Natasha",
  "dados": {
    "idade": "18",
    "ano-nascimento": "2002",
    "altura": "175",
    "peso": "80"
  },
  "type": [
   "futebol",
   "pintura"
  ]
}];


describe('function pesquisarPoke', () => {
  it('is a function', () => {
    expect(typeof pesquisarPoke).toBe('function');
  });

  it('returns ´pesquisarPoke´', () => {
    expect(pesquisarPoke(alunas, "nat")).toStrictEqual([{
      "num": "003",
      "name": "Natasha",
      "dados": {
        "idade": "18",
        "ano-nascimento": "2002",
        "altura": "175",
        "peso": "80"
      },
      "type": [
       "futebol",
       "pintura"
      ]
    }]);
  });
});

describe('function ordenarPoke', () => {
  it('is a function', () => {
    expect(typeof ordenarPoke).toBe('function');
  });

  it('returns ´ordenarPoke´ for case "ordemA-Z"', () => {
    expect(ordenarPoke(alunas, "ordemA-Z")).toStrictEqual([{
      "num": "002",
      "name": "Amanda",
      "dados": {
        "idade": "38",
        "ano-nascimento": "1982",
        "altura": "160",
        "peso": "58"
      },
      "type": [
       "dança",
       "futebol"
      ]
    },
    {"num": "001",
      "name": "Carol",
      "dados": {
        "idade": "27",
       "ano-nascimento": "1993",
       "altura": "172",
       "peso": "62"
      },
     "type": [
       "dança",
       "pintura"
      ]
    },
    { "num": "003",
      "name": "Natasha",
      "dados": {
        "idade": "18",
        "ano-nascimento": "2002",
        "altura": "175",
        "peso": "80"
      },
      "type": [
       "futebol",
       "pintura"
      ]
    }]);
  });

  it('returns ´ordenarPoke´ for case ordemZ-A', () => {
    expect(ordenarPoke(alunas, "ordemZ-A")).toStrictEqual([{ 
      "num": "003",
      "name": "Natasha",
      "dados": {
        "idade": "18",
        "ano-nascimento": "2002",
        "altura": "175",
        "peso": "80"
      },
      "type": [
       "futebol",
       "pintura"
      ]
    },
    {"num": "001",
      "name": "Carol",
      "dados": {
        "idade": "27",
       "ano-nascimento": "1993",
       "altura": "172",
       "peso": "62"
      },
     "type": [
       "dança",
       "pintura"
      ]
    },
    {"num": "002",
      "name": "Amanda",
      "dados": {
        "idade": "38",
        "ano-nascimento": "1982",
        "altura": "160",
        "peso": "58"
      },
      "type": [
       "dança",
       "futebol"
      ]
    }]);
  });

  it('returns ´ordenarPoke´ for case "ordemCrescente', () => {
    expect(ordenarPoke(alunas, "ordemCrescente")).toStrictEqual([{
      "num": "001",
      "name": "Carol",
      "dados": {
        "idade": "27",
        "ano-nascimento": "1993",
        "altura": "172",
        "peso": "62"
      },
      "type": [
       "dança",
       "pintura"
      ]
    },
    {
      "num": "002",
      "name": "Amanda",
      "dados": {
        "idade": "38",
        "ano-nascimento": "1982",
        "altura": "160",
        "peso": "58"
      },
      "type": [
       "dança",
       "futebol"
      ]
    },
    {
      "num": "003",
      "name": "Natasha",
      "dados": {
        "idade": "18",
        "ano-nascimento": "2002",
        "altura": "175",
        "peso": "80"
      },
      "type": [
       "futebol",
       "pintura"
      ]
    }]);
  });
});

describe('function filtroTipo', () => {
  it('is a function', () => {
    expect(typeof filtroTipo).toBe('function');
  });

  it('returns ´filtroTipo´', () => {
    expect(filtroTipo(alunas, "futebol")).toStrictEqual([{
      "num": "002",
      "name": "Amanda",
      "dados": {
        "idade": "38",
        "ano-nascimento": "1982",
        "altura": "160",
        "peso": "58"
      },
      "type": [
       "dança",
       "futebol"
      ]
    },
    {
      "num": "003",
      "name": "Natasha",
      "dados": {
        "idade": "18",
        "ano-nascimento": "2002",
        "altura": "175",
        "peso": "80"
      },
      "type": [
       "futebol",
       "pintura"
      ]
    }]);
  });
});

describe(' function calculoAgregado', () => {
  it('is a function', () => {
    expect(typeof calculoAgregado).toBe('function');
  });

  it('returns ´calculoAgregado´', () => {
    expect(calculoAgregado( 160, 175)).toBe(91);
  });
  it('should throw TypeError when invoked with wrong argument types', () => {
    expect(() => calculoAgregado()).toThrow(TypeError);
    expect(() => calculoAgregado(" ", " ")).toThrow(TypeError);
    expect(() => calculoAgregado(null, [])).toThrow(TypeError);
    expect(() => calculoAgregado(0, " ")).toThrow(TypeError);
  });
});
