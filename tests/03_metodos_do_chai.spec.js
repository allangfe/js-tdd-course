// var expect = require('chai').expect;

// describe('Main', function() {
//     var arr; 
 
//     //roda todas as vezes, antes de cada bloco.
//     beforeEach(function(){
//          arr = [1, 2, 3];
//     });
 
//      //testar tipos ou se existe (smoke test) - teste basico
//      it("deve ser um array", function(){
//         expect(arr).to.be.a('array');
//      })

//      it('deve ter o tamanho de 4 quando colocar outro valor no array', function(){
//          arr.push(4);
//          expect(arr).have.lengthOf(4);
//      });
 
//      it('deve ter o tamanho 2 quando diminui um valor no array', function(){
//          arr.pop();
//          expect(arr).have.lengthOf(2);
//      });

//      it('deve remover o valor 3 quando diminuo um valor do array', function(){
//         arr.pop();
//         expect(arr).to.not.include(3);
//      });

//      it('deve retornar true quando pop 3 for de fato este valor', function(){
//         expect(arr.pop() === 3).to.be.true;
//      })
//  });