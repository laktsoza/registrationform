


import sha from 'js-sha256';
import AWN from 'awesome-notifications';

const notifier = new AWN();

const inputForEmail = document.getElementById('email');
const password = document.getElementById('password');
const RePassword = document.getElementById('re-password');
const form = document.getElementById('form');

const users = [];

let savedUsers = localStorage.getItem('users');
console.log((JSON.parse(savedUsers)));

function User(email, password){
    this.email = email;
    this.password = sha(password);
}

function checkInputs(){
    if((inputForEmail.value && password.value) && (password.value === RePassword.value)) {
        let user =  new User(inputForEmail.value, password.value);
        users.push(user);
        localStorage.setItem('Users', JSON.stringify(users));
        notifier.success('Your Registration Has Been Successfully Received', {durations: {success: 3000}});
        inputForEmail.value = '';
        password.value = '';
        RePassword.value = '';
    } 
    if(!(password.value === RePassword.value)) {
        notifier.warning('Please Repeat Password Correctly', {durations: {warning: 3000}});
    }
}

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    checkInputs();
});





