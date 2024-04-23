import { expect, test } from "bun:test";
import Brasil from './utils/estados';
const database = Brasil(); // Same than import Brasil from 'api-estadosdobrasil'

interface Estado {
    id: string;
    nome: string;
}

interface Cidade {
    siglaEstado: string;
    nome: string;
}

test('Brasil object should be imported correctly', () => {
  expect(database).toBeDefined();
});

test('Should have states in the list of states', () => {
  expect(database.estados.length).toBeGreaterThan(0);
});

test('Should have cities in the list of cities', () => {
    const database = Brasil(); // Same than import Brasil from 'api-estadosdobrasil'
    expect(database.cidades.length).toBeGreaterThan(0);
});

test('Campinas should be in the list of cities of São Paulo', () => {
  const citiesOfSP = database.cidades.filter((city: Cidade) => city.siglaEstado === 'SP');
  const campinas = citiesOfSP.find((city: Cidade) => city.nome === 'Campinas');
  expect(campinas).toBeDefined();
});

test('São Paulo state should be in the list of states', () => {
  const saoPaulo = database.estados.find((state: Estado) => state.id === 'SP');
  expect(saoPaulo).toBeDefined();
});
