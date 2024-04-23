import { expect, test } from "bun:test";
import Brasil from 'api-estadosdobrasil';

interface Estado {
    id: string;
    nome: string;
}

interface Cidade {
    siglaEstado: string;
    nome: string;
}

test.skip('Brasil object should be imported correctly', () => {
  expect(Brasil).toBeDefined();
});

test.skip('Should have states in the list of states', () => {
  expect(Brasil.estados.length).toBeGreaterThan(0);
});

test.skip('Should have cities in the list of cities', () => {
  expect(Brasil.cidades.length).toBeGreaterThan(0);
});

test.skip('Campinas should be in the list of cities of São Paulo', () => {
  const citiesOfSP = Brasil.cidades.filter((city: Cidade) => city.siglaEstado === 'SP');
  const campinas = citiesOfSP.find((city: Cidade) => city.nome === 'Campinas');
  expect(campinas).toBeDefined();
});

test.skip('São Paulo state should be in the list of states', () => {
  const saoPaulo = Brasil.estados.find((state: Estado) => state.id === 'SP');
  expect(saoPaulo).toBeDefined();
});
