const { expect, test } = require('@jest/globals');

const ramdNumber = () => Math.round(Math.random() * 100);

test(`Testa novas implementações nas funções`, () => {
  expect.assertions();

  let ramdNumber = jest.fn()
  .mockImplementation((num1, num2, num3) => {
    return num1 * num2 * num3;
  })

  expect(ramdNumber(4, 2, 2)).toBe(16);
  expect(ramdNumber).toHaveBeenCalledTimes(1);

  //  resetanto mock
  ramdNumber.mockRestore();

  ramdNumber = jest.fn()
  .mockImplementation((num1) => {
    return num1 * 2;
  })

  expect(ramdNumber(1)).toBe(2);
  expect(ramdNumber).toHaveBeenCalledTimes(1);
})