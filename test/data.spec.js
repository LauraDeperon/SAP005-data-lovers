import { calculoAgregado, filtroTipo, ordenarPoke, pesquisarPoke } from '../src/data.js';
import { alunas, Carol, Amanda, Natasha } from '../src/api.js';

describe('function pesquisarPoke', () => {
  it('is a function', () => {
    expect(typeof pesquisarPoke).toBe('function');
  });

  it('returns ´pesquisarPoke´', () => {
    expect(pesquisarPoke(alunas, "nat")).toStrictEqual([Natasha]);
  });
});

describe('function ordenarPoke', () => {
  it('is a function', () => {
    expect(typeof ordenarPoke).toBe('function');
  });

  it('returns ´ordenarPoke´ for case "ordemA-Z"', () => {
    expect(ordenarPoke(alunas, "ordemA-Z")).toStrictEqual([Amanda, Carol, Natasha]);
  });

  it('returns ´ordenarPoke´ for case ordemZ-A', () => {
    expect(ordenarPoke(alunas, "ordemZ-A")).toStrictEqual([Natasha, Carol, Amanda]);
  });

  it('returns ´ordenarPoke´ for case "ordemCrescente', () => {
    expect(ordenarPoke(alunas, "ordemCrescente")).toStrictEqual([Carol, Amanda, Natasha]);
  });
});

describe('function filtroTipo', () => {
  it('is a function', () => {
    expect(typeof filtroTipo).toBe('function');
  });

  it('returns ´filtroTipo´', () => {
    expect(filtroTipo(alunas, "futebol")).toStrictEqual([Amanda, Natasha]);
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
