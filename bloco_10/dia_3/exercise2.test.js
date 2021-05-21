const { expect, test } = require('@jest/globals');

const ramdNumber = () => Math.round(Math.random() * 100);

test(`Testa a implementação de novos parâmetros`, () => {
  expect.assertions();

  const ramdNumber = jest.fn()
  .mockImplementation((num1, num2) => {
    return num1 / num2;
  })

  expect(ramdNumber(4,2)).toBe(2);
  expect(ramdNumber).toHaveBeenCalledTimes(1);
});
