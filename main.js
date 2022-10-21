const inputEmail = document.querySelector("#email")
const errorMail = document.querySelector("#email-error")
inputEmail.addEventListener('keyup', () => {
    const emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i
    if (emailRegex.test(inputEmail.value)) {
        errorMail.innerHTML = ""
    } else {
        errorMail.innerHTML = "Please enter a valid email address"
    }
})