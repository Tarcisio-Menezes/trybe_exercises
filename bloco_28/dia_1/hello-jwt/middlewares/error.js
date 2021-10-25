module.exports = (err, _req, res, _next) => {
  // Qualquer erro será recebido sempre por esse middleware, então a primeira coisa que fazemos
  // é identificar qual o tipo do erro.

  // Construímos, então, um mapa que conecta um erro de domínio a um status HTTP.
  const statusByErrorCode = {
    notFound: 404, // Erros do tipo `notFound` retornam status 404 Not Found
    invalidData: 400, // Erros do tipo `invalidData` retornam status 400 Invalid
    conflict: 409, // Erros do tipo `Conflict` retornam status 409 Conflict
    // Podemos adicionar quantos códigos novos desejarmos
  };

  // Buscamos o status adequado para o erro que estamos tratando.
  // Caso não haja um status para esse código, assumimos que é
  // um erro desconhecido e utilizamos o status 500 Internal Server Error
  const status = statusByErrorCode[err.code] || 500;

  // Por último, retornamos o status e a mensagem de erro para o client
  res.status(status).json({ error: { message: err.message } });
};