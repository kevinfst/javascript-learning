/* 
    - Conversão de tipos (type casting ou type conversion): Ocorre quando você explicitamente transforma um valor de um tipo para outro. Isso é feito de forma consciente, usando funções ou métodos específicos para realizar a conversão.
*/

let value = "7"
// Verificando o tipo da variável.
console.log(typeof value)
// Alterando para number.
console.log(typeof Number(value))

let age = 21
// Alterando para string com o método toString().
console.log(typeof age.toString())
// Ou
console.log(typeof String(age))

let option = 1
console.log(Boolean(option))
console.log(typeof Boolean(option))

/*     - Coerção de tipos: Acontece de forma automática (implicitamente). O JavaScript tenta automaticamente converter um dos valores para um tipo  compatível antes de realizar a operação.
 */

console.log(typeof ("10" + 5))
