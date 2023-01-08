
let username = document.forms['form']['username_input']
let password = document.forms['form']['password_input']
let usernameError = document.getElementById('username_error')
let passwordError = document.getElementById('password_error')
let submitButton = document.getElementById('submit')
let form = document.querySelectorAll('form')[0]


form.addEventListener('submit', (e) =>{

    e.preventDefault();

    if (username.value === "") {

        usernameError.style.color = "red"
        username.style.border = "1px solid red"

    }
    if(password.value === ""){

        passwordError.style.color = "red"
        password.style.border = "1px solid red"
    }
})
