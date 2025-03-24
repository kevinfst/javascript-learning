const input = document.querySelector("input")

// keydown - Quando uma tecla é pressionada (Captura tudo, CTRL, SHIFT, etc.)

// input.addEventListener("keydown", (event) => {
//     console.log(event.key)
// })


// keypress - Quando uma tecla do tipo caractere é pressionada (Letras, números, pontos, etc.)
input.addEventListener("keypress", (event) => {
    console.log(event.key)
})

input.onchange = () => {
    inputChange()
}

function inputChange(){
    console.log("INPUT HAS CHANGED!")
}