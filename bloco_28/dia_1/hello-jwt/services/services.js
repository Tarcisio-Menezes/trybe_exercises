const jwt = require('jsonwebtoken');

const validationLogin = (username, password) => {
  const minLength = 5
  if (typeof (username) !== 'string' || username.length < minLength) {
    return {
      error : { 
        code: 'invalidData',
        message: 'Username precisa ser texto com mais de 5 caracteres',
      },
    };
  }

  if (typeof (password) !== 'string' || password.length < minLength) {
    return {
      error : { 
        code: 'invalidData',
        message: 'Password precisa ser texto com mais de 5 caracteres',
      },
    }
  }
  return true;
};

const generatorTokenNoAdmin = (username, password) => {
  const result = validationLogin(username, password);

  if (!result.error) {
    const secret = 'delphi77';
  
    const jwtConfig = {
      expiresIn: '1h',
      algorithm: 'HS256',
    };
  
    const payload = {
      user: username,
      password,
      admin: false,
    }
  
    const token = jwt.sign({data: payload}, secret, jwtConfig);
    return token;
  } return result.error;
};

const generatorTokenAdmin = (username, password) => {
  const validation = validationLogin(username, password);
  if (!validation.error) {
    if (username === 'admin' && password === 's3nh4S3gur4???') {
      const payload = {
        user: 'admin',
        password: 's3nh4S3gur4???',
        admin: true,
      };

      const secret = 'delphi77';

      const jwtConfig = {
        expiresIn: '1h',
        algorithm: 'HS256',
      };

      const token = jwt.sign({data: payload}, secret, jwtConfig);
      
      return token
    }
  } return generatorTokenNoAdmin(username, password);
};

module.exports = {
  generatorTokenNoAdmin,
  generatorTokenAdmin,
};
