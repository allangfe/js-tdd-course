module.exports = {
  somar: function(num1, num2){
    return num1 + num2;
  },
  subtrair: function(num1, num2){
    return num1 - num2;
  },
  multiplicar: function(num1, num2){
    return num1 * num2;
  },
  dividir: function(num1, num2){
    return (num2 === 0) ? 'não é possivel divisão por 0!' : num1 / num2;
  }
}
