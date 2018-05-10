const somar = (num1, num2) => num1 + num2;
const subtrair = (num1, num2) => num1 - num2;
const multiplicar = (num1, num2) => num1 * num2;
const dividir = (num1, num2) => (num2 === 0) ? 'não é possivel divisão por 0!' : num1 / num2;


export { somar, subtrair, multiplicar, dividir }
