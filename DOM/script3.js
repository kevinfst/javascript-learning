const guest = document.querySelector("#guest-1")

// Retorna o conteúdo como texto.
// console.log(guest.textContent)
// guest.textContent = "João"
// console.log(guest)

console.log(guest.textContent) // Retorna o conteúdo visível e oculto.
console.log(guest.innerText) // Retorna somente o conteudo visível
console.log(guest.innerHTML) // Retorna o HTML como texto.