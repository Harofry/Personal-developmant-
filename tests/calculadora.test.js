const calculadora = require('../models/calculadora');

test('soma de 2 + 2 deve ser igual a 4', () => {
 const resultado = calculadora.somar(2, 2);
 expect(resultado).toBe(4);
});