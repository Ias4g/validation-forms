document.querySelector("form")
    .addEventListener("submit", event => {
        console.log("Enviando...")
        // A linha abaixo não deixa o form ser enviado
        event.preventDefault()
    })

const fields = document.querySelectorAll("[required]")
// console.log(fields)

function customValidation(event) {
    const field = event.target

    // trocar mensagem de required
    field.setCustomValidity("Este campo é obrigatório")
}

// for(let field of fields)
for (field of fields) {
    field.addEventListener("invalid", customValidation)
}