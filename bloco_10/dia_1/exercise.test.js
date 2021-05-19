const { test, expect } = require('@jest/globals');
const { searchEmployee } = require('./exercise');

describe(`A função searchEmployee:`, () => {
  test( 'Está definida', () => {
    expect(typeof searchEmployee).toBe('function');
  });
  
  test('Tem mensagem do erro para ID inexistente', () => {
    expect(() => { 
      searchEmployee('1256-8', 'lastName') }).toThrowError(new Error('ID não identificada'));
});

  test(`Tem mensagem do erro para specialities inexistente`, () => {
    expect(() => {
      searchEmployee('4678-2', 'xablau') }).toThrowError(new Error('Informação indisponível'));
  });

})
