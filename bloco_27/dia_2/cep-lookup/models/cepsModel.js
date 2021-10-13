const connection = require('./connection');

const searchByCep = async (cep) => {
  const treatedCep = cep.replace('-', '');
  const query = 'SELECT cep, logradouro, bairro, localidade, uf FROM ceps WHERE cep = ?';
  const logradouro = await connection.execute(query, [treatedCep])
  .then(([results]) => (results.length ? results[0] : null));

  if (logradouro) return logradouro;
  return false;
};

const addCep = async (cep, logradouro, bairro, localidade, uf) => {
  const cepNpTrace = cep.replace(/-/ig, '');
  const query = `INSERT INTO ceps (cep, logradouro, bairro, localidade, uf)
    VALUES (?, ?, ?, ?, ?);`
  await connection.execute(query, [cepNpTrace, logradouro, bairro, localidade, uf]);
  return { cep, logradouro, bairro, localidade, uf };
}

module.exports = {
  searchByCep,
  addCep,
};
