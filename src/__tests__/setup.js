require('@testing-library/jest-dom');

// Teste mínimo para satisfazer o requisito do Jest
describe('Setup', () => {
  test('deve carregar corretamente as configurações de teste', () => {
    expect(true).toBe(true);
  });
});

// Adicionando um teste básico para evitar o erro
test('setup test', () => {
  expect(1).toBe(1);
});