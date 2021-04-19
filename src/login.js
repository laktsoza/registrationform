


import sha from 'js-sha256';
import AWN from 'awesome-notifications';

const notifier = new AWN();

const inputForEmail = document.getElementById('email');
const password = document.getElementById('password');
const form = document.getElementById('form');


let users = JSON.parse(localStorage.getItem('Users')) || [];

function loginIn(){
    if(users.some(el => el.email === inputForEmail.value && el.password === sha(password.value))) {
        notifier.success('Welcome', {durations: {success: 3000}});
    } else {
        notifier.warning('Password Is Not Correct', {durations: {warning: 2000}});
    }
}


const loginListener = form.addEventListener('submit', e => {
    e.preventDefault();
    loginIn();
});

export {users, loginIn, loginListener};

