const user = {
    name: "Kevin",
    message: function() {
        // console.log(`Olá, ${user.name}!`)

        // Se utilizar o this com arrow function não irá funcionar!
        console.log(`Olá, ${this.name}!`)
    }
}

user.message()