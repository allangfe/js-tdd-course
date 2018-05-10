// import { expect } from 'chai';
// import { somar, subtrair, multiplicar, dividir } from '../src/aulas/04_criando_uma_calculadora';

// describe('Calc', () => {
//     //smoke test
//     describe('Smoke tests', () =>{
//         it('deve existir o metodo `somar`', () =>{
//             expect(somar).to.exist;
//         });

//         it('deve existir o metodo `subtrair`', () =>{
//             expect(subtrair).to.exist;
//         });

//         it('deve existir o metodo `multiplicar`', () =>{
//             expect(multiplicar).to.exist;
//         });

//         it('deve existir o metodo `dividir`', () =>{
//             expect(dividir).to.exist;
//         });
//     });
    
//     describe('somar', () =>{
//         it('deve retornar 4 quando somar(2, 2)', () =>{
//             expect(somar(2, 2)).to.be.equal(4);
//         });
//     });

//     describe('subtrair', () =>{
//         it('deve retornar 4 quando subtrair(6, 2)', () =>{
//             expect(subtrair(6, 2)).to.be.equal(4);
//         });

//         it('deve retornar -4 quando subtrair(6, 10)', () =>{
//             expect(subtrair(6, 10)).to.be.equal(-4);
//         });
//     });

//     describe('multiplicar', () =>{
//         it('deve retornar 4 quando somar(2, 2)', () =>{
//             expect(multiplicar(2, 2)).to.be.equal(4);
//         });
//     });

//     describe('dividir', () =>{
//         it('deve retornar 2 quando somar(8, 2)', () =>{
//             expect(dividir(8, 2)).to.be.equal(4);
//         });

//         it('deve retornar `não é possivel divisão por 0!`', () =>{
//             expect(dividir(8, 0)).to.be.equal('não é possivel divisão por 0!');
//         });
//     });
//  });