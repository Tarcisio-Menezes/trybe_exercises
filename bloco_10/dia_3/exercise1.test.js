const { expect, test } = require('@jest/globals');

const ramdNumber = () => Math.round(Math.random() * 100);

//  iniciando os testes com mock
test(`A função ramdNumber está definida`, () => {
  expect(typeof (ramdNumber)).toBe('function');
});

test('Testando se a função foi chamada', () => {
  expect.assertions();

  const ramdNumber = jest.fn()
  .mockReturnValueOnce(10);

  expect(ramdNumber()).toBe(10);
  expect(ramdNumber).toHaveBeenCalledTimes(1);
});
