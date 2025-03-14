function execute(taskName, callback){
    console.log("Executing task:", taskName)
    callback()
}

function taskStatus(){
    console.log("Task completed!")
}

// Chamando funcao dando valor ao parametro taskName, e chamando outra funcao criada fora.
execute("Studying JS.", taskStatus)

// Criando a funçao no proprio parametro.
execute("Studying with Guilherme", function(){
    console.log("In progress!")
})

// Utilizando Arrow Function
execute("Testing codes", () => {
    console.log("In progress!")
})