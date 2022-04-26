/**
 * Exercicio 1 - Refatorar nomes de variaveis e incrementar retorno de numeros impares
 */

 function removeEven(array) {
  let arrayNumeros = [];
  for (let number of arr) {
      if (number % 2 === 0) {
          arrayNumeros.push(number);
      }
  }
  return arrayNumeros;
}

console.log(removeEven([3,2,41,3,34]));

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function removeNumerosPares (value) {
  if (value % 2 !== 0) 
  return value;
}

//utilizando o filter
let numerosPares = numeros.filter(removeNumerosPares);
console.log(numerosPares);

