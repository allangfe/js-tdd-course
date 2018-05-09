var expect = require('chai').expect;
var calc = require('../src/aulas/04_criando_uma_calculadora.js')

describe('Calc', function() {
    //smoke test
    describe('Smoke tests', function(){
        it('deve existir a biblioteca calculadora', function(){
            expect(calc).to.exist;
        });

        it('deve existir o metodo `somar`', function(){
            expect(calc.somar).to.exist;
        });

        it('deve existir o metodo `subtrair`', function(){
            expect(calc.subtrair).to.exist;
        });

        it('deve existir o metodo `multiplicar`', function(){
            expect(calc.multiplicar).to.exist;
        });

        it('deve existir o metodo `dividir`', function(){
            expect(calc.dividir).to.exist;
        });
    });
    
    describe('somar', function(){
        it('deve retornar 4 quando somar(2, 2)', function(){
            expect(calc.somar(2, 2)).to.be.equal(4);
        });
    });

    describe('subtrair', function(){
        it('deve retornar 4 quando subtrair(6, 2)', function(){
            expect(calc.subtrair(6, 2)).to.be.equal(4);
        });

        it('deve retornar -4 quando subtrair(6, 10)', function(){
            expect(calc.subtrair(6, 10)).to.be.equal(-4);
        });
    });

    describe('multiplicar', function(){
        it('deve retornar 4 quando somar(2, 2)', function(){
            expect(calc.multiplicar(2, 2)).to.be.equal(4);
        });
    });

    describe('dividir', function(){
        it('deve retornar 2 quando somar(8, 2)', function(){
            expect(calc.dividir(8, 2)).to.be.equal(4);
        });

        it('deve retornar `não é possivel divisão por 0!`', function(){
            expect(calc.dividir(8, 0)).to.be.equal('não é possivel divisão por 0!');
        });
    });
 });