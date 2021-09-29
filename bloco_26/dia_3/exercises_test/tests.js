const { expect } = require('chai');

const { typeOfNumber } = require('./typeOfNumber');

describe('Executa a função typeOfNumber', () => {
  describe('quando o número for maior que 0', () => {
    describe('a resposta', () => {
      it('é uma "string"', () => {
        const resposta = typeOfNumber(10);

        expect(resposta).to.be.a('string');
      });

      it('é igual a "positivo"', () => {
        const resposta = typeOfNumber(10);

        expect(resposta).to.be.equals('positivo');
      });
    });
  });

  describe('quando o número for menor que 0', () => {
    describe('a resposta', () => {
      it('é uma "string"', () => {
        const resposta = typeOfNumber(-10);

        expect(resposta).to.be.a('string');
      });

      it('é igual a "negativo"', () => {
        const resposta = typeOfNumber(-10);

        expect(resposta).to.be.equals('negativo');
      });
    });
  });

  describe('quando o número for igual a 0', () => {
    describe('a resposta', () => {
      it('é uma "string"', () => {
        const resposta = typeOfNumber(0);

        expect(resposta).to.be.a('string');
      });

      it('é igual a "neutro"', () => {
        const resposta = typeOfNumber(0);

        expect(resposta).to.be.equals('neutro');
      });
    });
  });
});
