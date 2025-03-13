// Visualizar o conteúdo do document
console.log(document) // Variável especial já disponível do JavaScript, objeto que você pode acessar a qualquer momento. Mostra o index.html.

// Obter o title da página
console.log(document.title)

// Acessar o elemento pelo ID (SELETOR ID)
const guestById = document.getElementById("guest-2")
console.log(guestById)

// Mostra as propriedades do objeto
console.dir(guestById)

// Acessar elemento com class (SELETOR class)
const guestsByClass = document.getElementsByClassName("guest")
console.log(guestsByClass)

// Exibir o primeiro elemento da lista ou qual você deseja
console.log(guestsByClass.item(0))
// Ou assim também
console.log(guestsByClass[1])

// Selecionar lista elementos pela tag
const guestsByTag = document.getElementsByTagName("li")
console.log(guestsByTag)