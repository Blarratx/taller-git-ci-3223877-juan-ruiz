const { sumar } = require('../src/app.js');

describe('Función sumar', () => {
  test('Suma 2 + 3 debe ser igual a 5', () => {
    expect(sumar(2, 3)).toBe(5);
  });

  test('Suma -5 + 10 debe ser igual a 5', () => {
    expect(sumar(-5, 10)).toBe(5);
  });

  test('Suma 2.5 + 3.1 debe ser aproximadamente 5.6', () => {
    expect(sumar(2.5, 3.1)).toBeCloseTo(5.6);
  });

  test('Suma con cero debe funcionar', () => {
    expect(sumar(0, 7)).toBe(7);
  });
});
