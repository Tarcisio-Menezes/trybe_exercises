const { expect, test } = require('@jest/globals');

const users = {
    4: { name: 'Mark' },
    5: { name: 'Paul' }
  };
  
  const findUserById = (id) => {
    return new Promise((resolve, reject) => {
        if (users[id]) {
          return resolve(users[id]);
        };
  
        return reject({ error: 'User with ' + id + ' not found.' });
    });
  };
  
  const getUserName = (userID) => {
    return findUserById(userID).then(user => user.name);
  };
  
  test(`O usuário pode ser encontrado`, () => {
      expect.assertions(1);
      return getUserName(4).then((data) => {
        expect(data).toEqual('Mark');
      });
  });

  