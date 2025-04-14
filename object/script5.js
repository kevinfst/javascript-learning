/* 
    OPERADOR DE COALESCÊNCIA NULA (??)
    Operador lógico que retorna o seu operando do lado direito quando o seu operador do lado esquerdo é null ou undefined. Caso contrário, ele retorna o seu operando do lado esquerdo.
*/

// Pode ser null ou undefined, caso contrário, não vai dar certo.
let content = null
console.log(content ?? "Default content")

const user = {
    name: "Kevin",
    picture: undefined,
}

// Diferentes exemplos
console.log(user.name ?? "Name not found")
console.log(user.picture ?? "Picture not found")