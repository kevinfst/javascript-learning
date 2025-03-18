const guests = document.querySelector("ul")
console.log(guests)

const newGuest = document.createElement("li")
const guestName = document.createElement("span")

guestName.textContent = "Guilhas"

const guestLastName = document.createElement("span")
guestLastName.textContent = "Correia"


// Adiciona após o último filho.
// newGuest.append(guestName, guestLastName)

// Adiciona antes do primeiro filho.
// newGuest.prepend(guestLastName)

// É mais simples que o append e aceita apenas um argumento
newGuest.appendChild(guestName)

guests.append(newGuest)