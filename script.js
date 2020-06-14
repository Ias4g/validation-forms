
document.querySelector("form")
    .addEventListener("submit", event => {
        // A linha abaixo não deixa o form ser enviado
        event.preventDefault()

        alert("Enviando...")

        document.getElementById("input-one").value = ""
        document.getElementById("input-two").value = ""
        document.getElementById("input-one").style.borderColor = "#fd951f"
        document.getElementById("input-two").style.borderColor = "#fd951f"
    })

const fields = document.querySelectorAll("[required]")

function validateField(field) {
    // logica para verificar se existem erros
    function verifyErros() {
        let foundError = false

        for (let error in field.validity) {
            // se não for customError
            // então verifica se tem erro 
            if (field.validity[error] && !field.validity.valid) {
                foundError = error
            }
        }

        return foundError
    }

    function customMessage(typeError) {
        const messages = {
            text: {
                valueMissing: "Por favor, preencha este campo"
            },
            email: {
                valueMissing: "O email é obrigatório",
                typeMismatch: "Por favor insira um formato de email válido"
            }
        }

        return messages[field.type][typeError]
    }

    function setCustomMessage(message) {
        const spanError = field.parentNode.querySelector("span.error")

        if (message) {
            spanError.classList.add("active")
            spanError.innerHTML = message
        } else {
            spanError.classList.remove("active")
            spanError.innerHTML = ""
        }
    }

    return function () {
        const error = verifyErros()

        if (error) {
            const message = customMessage(error)
            field.style.borderColor = "rgba(255, 0, 0, 0.3)"
            setCustomMessage(message)
        } else {
            field.style.borderColor = "rgba(0, 255, 0, 0.3)"
            setCustomMessage()
        }
    }
}

function customValidation(event) {
    const field = event.target
    const validation = validateField(field)

    validation()
}

// for(let field of fields) outra opção
for (field of fields) {
    field.addEventListener("invalid", event => {
        // eliminar o bubble
        event.preventDefault()
        customValidation(event)
    })
    field.addEventListener("blur", customValidation)
}