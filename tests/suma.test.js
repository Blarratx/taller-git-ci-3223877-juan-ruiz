const { sumar } = require('../src/app.js');

// Prueba 1: Suma de números positivos
test('Suma 2 + 3 debe ser igual a 5', () => {
  expect(sumar(2, 3)).toBe(5);
});

// Prueba 2: Suma de números negativos
test('Suma -5 + 10 debe ser igual a 5', () => {
  expect(sumar(-5, 10)).toBe(5);
});

// Prueba 3: Suma de decimales
test('Suma 2.5 + 3.1 debe ser aproximadamente 5.6', () => {
  expect(sumar(2.5, 3.1)).toBeCloseTo(5.6);
});

// Prueba 4: Suma con cero
test('Suma 0 + 7 debe ser igual a 7', () => {
  expect(sumar(0, 7)).toBe(7);
});
