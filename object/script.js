    /* 
    OBJETO
        - Uma coleção de dados e/ou funcionalidades;
        - Podem ter propriedades e métodos; 
    */

    // Cria um objeto vazio.
    const obj = {}
    console.log(obj)
    console.log(typeof obj)

    // Cria um objeto com propriedades e métodos.
    const user = {
        email: "kevin@email.com",
        age: 21,
        name: {
            first_name: "Kevin",
            last_name: "Santos",
        },
        address: {
            street: "Street X",
            number: 21,
            city: "São Paulo",
            postal_code: "12345-123",
        },
        message: () => {
            console.log("Hello, Kevin!")
        }
    }

    // Acessando propriedades e métodos, usando a notação de ponto.
    console.log(user.email)

    // Acessando propriedade de objetos.
    console.log(user.name.first_name)
    
    // Executa o método do objeto.
    user.message()

    // Notação de colchetes.
    console.log(user["email"])
    console.log(user["name"]["first_name"])
    user["message"]()
