
// falso positivo, pois o jest não espera terminar a função setTimeout
test("Não deveria passar!", () => {
    setTimeout(() => {
      expect(10).toBe(5);
      console.log('Deveria falhar!')
    }, 500);
  });

  // a callback done() precisa ser chamada nestes casos  
  test("Não deveria passar!", done => {
    setTimeout(() => {
      expect(10).toBe(5);
      console.log('Deveria falhar!')
      done();
    }, 500);
  });
