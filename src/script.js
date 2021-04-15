

const sha = require('js-sha256');

import AWN from 'awesome-notifications';

const container = document.getElementById('container');
const inputForEmail = document.getElementById('email');
const password = document.getElementById('password');
const checkedPassword = document.getElementById('check-password');
const registerButton = document.getElementById('btn');


// let takenFromStorage = localStorage.getItem('password');
// console.log(takenFromStorage);

// function greenBorder(input1, input2) {
//     input1.style.border = '1px solid green';
//     input2.style.border = '1px solid green';
// }

function checkInputs(){
    if((inputForEmail.value && password.value) && (password.value === checkedPassword.value)) {
    
        let hasedValue = sha(password.value);
        localStorage.setItem('password', hasedValue);
        container.style.display = 'none';
        let notifier = new AWN();
        notifier.success('Your Registration Has Been Successfully Received', {durations: {success: 5000}});
        
    } else {
        console.log("Something Went Wrong");
        password.style.border = '2px solid red';
        let notifier = new AWN();
        notifier.warning('Please Fill The Form Correctly', {durations: {success: 5000}});
    }
}

registerButton.addEventListener('click', checkInputs);





