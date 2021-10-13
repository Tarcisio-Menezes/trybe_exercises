// demostração de uso do axios para reqs

// index.js

const axios = require('axios').default;

// Para aquecer, vamos começar com uma requisição do tipo `GET`
axios.get('https://postman-echo.com/get?param1=teste')
  .then((response) => {

    // Caso esteja tudo OK, retornamos os dados
    // As informações são retornas dentro da propriedade "data" quando usamos axios
    return response.data;
  })
  .then((data) => {
    // Por fim, escrevemos o body no console
    console.log(data);
  })
  .catch((errorOrResponse) => {
    // Em caso de falha simples (a request completou com um status diferente de 2xx)
    // simplesmente logamos o status no console
    if (errorOrResponse.status) {
      return console.error(`Request failed with status ${errorOrResponse.status}`);
    }

    // Caso tenha acontecido um erro de rede (não foi possível completar a request)
    // logamos o erro todo
    console.error(errorOrResponse);
  });


  // Para finalizar: Aqui utilizamos o axios e o Node.js para executar os exemplos no terminal. 
// Podemos utilizar também o pacote axios na nossa aplicação front-end para realizar requesições. 
// Assim, pode ser uma ótima alternativa para fazer requisições quando realizarmos integração 
// entre front-end e back-end.
