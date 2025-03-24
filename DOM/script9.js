const form = document.querySelector("form")

form.onsubmit = (event) => {
    event.preventDefault()
    console.log("You submitted the form #1")
}

form.onsubmit = (event) => {
    event.preventDefault()
    console.log("You submitted the form #2")
}

form.addEventListener("submit", (event) => {
    event.preventDefault
    console.log("You submitted the form #3")
})

form.addEventListener("submit", (event) => {
    event.preventDefault
    console.log("You submitted the form #4")
})