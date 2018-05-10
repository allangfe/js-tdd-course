/*

Desafio FizzBuzz

Escreva uma lib que receba um número e:

Se o número for divisível por 3, no lugar do número escreva 'Fizz'
Se o número for divisível por 5, no lugar do número escreva 'Buzz'
Se o número for divisível por 3 e 5, no lugar do número escreva 'FizzBuzz'
Se não for múltiplo de nada, retorna o número

*/

import { expect } from 'chai';
import fizzBuzz from '../src/aulas/05_fizzbuzz'

describe('Fizzbuzz', () => {
    
    it('deve retornar `Fizz` se resultado for divisivel por 3', () => {
        expect(fizzBuzz(3)).to.be.equal('Fizz');
    });

    it('deve retornar `Buzz` se resultado for divisivel por 5', () => {
        expect(fizzBuzz(5)).to.be.equal('Buzz');
        expect(fizzBuzz(10)).to.be.equal('Buzz');
    });

    it('deve retornar `FizzBuzz` se resultado for divisivel por 3 e 5', () => {
        expect(fizzBuzz(15)).to.be.equal('FizzBuzz');
    });

    it('deve retornar numero se resultado for multiplo de nada', () => {
        expect(fizzBuzz(16)).to.be.equal(16);
    });
});