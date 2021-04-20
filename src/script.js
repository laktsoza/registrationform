

import sha from 'js-sha256';
import AWN from 'awesome-notifications';


const notifier = new AWN();

const inputForEmail = document.getElementById('email');
const password = document.getElementById('password');
const RePassword = document.getElementById('re-password');
const form = document.getElementById('form');

let users = JSON.parse(localStorage.getItem('Users')) || [];

function User(email, password){
    this.email = email;
    this.password = sha(password);
}

function clearInputs (input1, input2, input3) {
    input1.value = '';
    input2.value = '';
    input3.value = '';
}

function register(){

    if((inputForEmail.value && password.value) && (password.value === RePassword.value)) {
        if(!users.some(element => element.email === inputForEmail.value)) {
            users.push(new User(inputForEmail.value, password.value));
            localStorage.setItem('Users', JSON.stringify(users));
            notifier.success('Your Registration Has Been Successfully Received', {durations: {success: 3000}});
            clearInputs(inputForEmail, password, RePassword);
        } else {
            notifier.warning('User Already Exisits', {durations: {warning: 2000}});
        }
    } 
    if(!(password.value === RePassword.value)) {
        notifier.warning('Please Repeat Password Correctly', {durations: {warning: 3000}});
    }
}

form.addEventListener('submit', e => {
    e.preventDefault();
    register();
});




