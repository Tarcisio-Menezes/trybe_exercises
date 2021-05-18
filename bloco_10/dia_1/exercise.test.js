const { test, expect } = require('@jest/globals');
const { searchEmployee } = require('./exercise');

test( 'A função searchEmployee está definida', () => {
  expect(typeof searchEmployee).toBe('function');
})
