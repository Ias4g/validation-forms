document.querySelector("form")
    .addEventListener("submit", event => {
        console.log("Enviando...")
        // A linha abaixo não deixa o form ser enviado
        event.preventDefault()
    })

const fields = document.querySelectorAll("[required]")
// console.log(fields)

function customValidation(event) {
    // eliminar o bubble
    event.preventDefault()

    const field = event.target

    // logica para erificar se exixtem erros
    function verifyErros() {
        let foundError = false

        for (let error in field.validity) {
            // se não for customError
            // então verifica se tem erro 
            if (error != "cutomError" && field.validity[error]) {
                foundError = error
            }
        }

        return foundError
    }

    const error = verifyErros()
    console.log("Error exist: ", error)

    // if (error) {
    //     field.setCustomValidity("Este campo é obrigatório")
    // } else {
    //     field.setCustomValidity("")
    // }
}

// for(let field of fields)
for (field of fields) {
    field.addEventListener("invalid", customValidation)
}