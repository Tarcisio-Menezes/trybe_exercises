const { expect, test } = require('@jest/globals');

const uppercase = (str, callback) => {
    callback(str.toUpperCase());
  };

const callB = (data) => console.log(data);

//uppercase('hoje é dia de tricolor', callB);

test(`A função uppercase está definida`, () => {
  expect.assertions(1);
  expect(typeof (uppercase)).toBe('function');
});

// utilizando done em callbacks
test('A função uppercase está funcionando', (done) => {
  expect.assertions(1);
  const callback = (data) => {
    expect(data).toBe('HOJE É DIA DE TRICOLOR!');
    done();
  };

  uppercase('hoje é dia de tricolor!', callback);  
});
