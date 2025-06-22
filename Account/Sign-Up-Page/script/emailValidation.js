function Validate(email){
    // Um email segue o formarto:  teste@email.com----


    if (typeof email !== 'string'){
        throw new Error("Email deve ser uma string")
    }

    let string = email

    const rangex = /^[^\s]+@[^\s]+\.[^\s]+$/g;

    // g procura na string inteira
    let validate = string.match(rangex)

    if (validate == null){
        return "Error: Invalid Email"
    }

    else{
        return "ValidEmail"
    }

}

function EmailValid(){

    const emailInput = document.getElementById('email').value
    const errorMensage = document.getElementById('invalidEmail')

    if (Validate(emailInput) == 'Error: Invalid Email'){
        errorMensage.style.display = ''
        
    }
    
    else{
        errorMensage.style.display = 'none'
    }
}
