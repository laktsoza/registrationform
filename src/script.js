

import sha from 'js-sha256';
import AWN from 'awesome-notifications';

const notifier = new AWN();

const inputForEmail = document.getElementById('email');
const password = document.getElementById('password');
const RePassword = document.getElementById('re-password');
const form = document.getElementById('form');

let users = [];

function checkStorage () {
    if(localStorage.getItem('Users')) {
        let savedUsers = localStorage.getItem('Users');
        users = (JSON.parse(savedUsers)); 
        return users;
    }
} checkStorage();

function clearInputs () {
    inputForEmail.value = '';
    password.value = '';
    RePassword.value = '';
}

let exisit = false;

function checkExist() {
    if(users.length) {
        exisit = users.some(element => element.email === inputForEmail.value);
    } else {
        exisit = false;
    }
}

function User(email, password){
    this.email = email;
    this.password = sha(password);
}

function checkInputs(){

    if((inputForEmail.value && password.value) && (password.value === RePassword.value)) {
        checkExist();
        if(!exisit) {
            let user =  new User(inputForEmail.value, password.value);
            users.push(user);
            localStorage.setItem('Users', JSON.stringify(users));
            notifier.success('Your Registration Has Been Successfully Received', {durations: {success: 3000}});
            clearInputs();
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
    checkInputs();
});




