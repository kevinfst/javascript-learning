const product = {
    name: "Keyboard",
    amount: 100
}

// Atualiza o valor de uma propriedade.
console.log(product.amount) // Antes de ser atualizado
product.amount = 90         // Atualização do valor
console.log(product.amount) // Valor atualizado

// Exemplo com o nome do produto.
console.log(product.name)
product.name = "Mouse"
console.log(product.name)

// Com a notação de colchetes.
product["amount"] = 50
console.log(product)