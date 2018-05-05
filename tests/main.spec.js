describe('Main', function() {
   //roda um vez antes do bloco
   before(function() {
        console.log("before");
   });

   //roda uma vez, depois do bloco
   after(function(){
        console.log("after");
   });

   //roda todas as vezes, antes de cada bloco.
   beforeEach(function(){
        console.log("beforeEach");
   });

    //roda todas as vezes, depois de cada bloco.
    afterEach(function(){
        console.log("afterEach");
    });

    it('teste 1', function(){
        console.log("teste 1");
    });

    it('teste 2', function(){
        console.log("teste 2");
    });
});

//npm test -- --reporters > demonstra as opções de testes.
//npm test -- --bail  > achou o teste falho, já não roda os demais.
//it.skip > pula o teste
//context.only > roda apenas este bloco