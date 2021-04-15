

const sha = require('js-sha256');
const awn = require('awesome-notifications');

console.log(awn);



const inputForEmail = document.getElementById('email');
const password = document.getElementById('password');
const checkedPassword = document.getElementById('check-password');
const registerButton = document.getElementById('btn');

function checkInputs(){
    if((inputForEmail.value && password.value) && (password.value === checkedPassword.value)) {
        console.log('good');
        let hasedValue = sha(password.value);
        localStorage.setItem('password', hasedValue);
        // new awn().success('Custom success message', {durations: {success: 0}})
    } else {
        console.log("not good");
    }
}

registerButton.addEventListener('click', checkInputs);





