
const formulario = document.querySelector('#form-cadastro')

formulario.addEventListener('submit', cadastrar)

function cadastrar (event) {
  event.preventDefault()
  const name = document.getElementById('name')
  const email = document.getElementById('email')
  const password = document.getElementById('password')

  let erro = false

  const inputUser = document.forms['form-cadastro']['name']

  if (!inputUser.value) {
    erro = true
    name.classList.add('inputErro')
  } else {
    name.classList.remove('inputErro')
  }

  const inputEmail = document.forms['form-cadastro']['email']

  if (!inputEmail.value) {
    erro = true
    email.classList.add('inputErro')
  } else {
    email.classList.remove('inputErro')
  }

  const inputPassword = document.forms['form-cadastro']['password']

  if (!inputPassword.value) {
    erro = true
    password.classList.add('inputErro')
  } else {
    password.classList.remove('inputErro')
  }
}
