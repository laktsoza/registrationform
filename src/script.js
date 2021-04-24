

import sha from 'js-sha256';
import AWN from 'awesome-notifications';
import { v4 as uuidv4 } from 'uuid';


const notifier = new AWN();

const inputForEmail = document.getElementById('email');
const inputForUsername = document.getElementById('username');
const password = document.getElementById('password');
const RePassword = document.getElementById('re-password');
const form = document.getElementById('form');

let users = JSON.parse(localStorage.getItem('Users')) || [];

function User(email, username, password, id){
    this.email = email;
    this.username = username;
    this.password = sha(password);
    this.id = id;
}

function clearInputs (input1, input2, input3, input4) {
    input1.value = '';
    input2.value = '';
    input3.value = '';
    input4.value = '';
}


function register(){

    if((inputForEmail.value && password.value) && (password.value === RePassword.value) && inputForUsername.value) {
        console.log(inputForUsername.value);
        if(!users.some(element => element.email === inputForEmail.value)) {
            users.push(new User(inputForEmail.value, inputForUsername.value, password.value, uuidv4()));
            localStorage.setItem('Users', JSON.stringify(users));
            notifier.success('Your Registration Has Been Successfully Received', {durations: {success: 3000}});
            clearInputs(inputForEmail, inputForUsername, password, RePassword);
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




