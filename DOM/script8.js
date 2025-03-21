const ul = document.querySelector("ul")

ul.addEventListener("scroll", (event) => {
    console.log(ul.scrollTop)

    if (ul.scrollTop === 308) {
        // console.log("FIM DA LISTA")

        ul.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }
})

const button = document.querySelector("button")
button.addEventListener("click", (event) => {
    event.preventDefault()
    alert("CLICKED!")
})