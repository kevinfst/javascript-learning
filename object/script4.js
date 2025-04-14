/* 
    OPTIONAL CHAINING (?.) - Encadeamento opcional
    Se a propriedade ou a função chamada é nullish (null or undefined), a expressão retorna undefined em vez de gerar um erro.

    Útil ao explorar o conteúdo de um objeto quando não existe garantia da existência de determinadas propriedades obrigatórias.
*/

const user = {
    id: 1,
    name: "Kevin",
    /* address: {
        street: "Street X",
        city: "São Paulo",
        geo: {
            latitude: 49.9954,
            longitude: 21.7289,
        },
    }, 
    */
    message: function(){
        console.log(`Hello, ${this.name}!`)
    }
}

// Caso não exista, ao invés de exibir um erro, ele retorna undefined.

console.log(user?.address)
console.log(user?.address?.street)

// Com function também funciona.
user.message?.()