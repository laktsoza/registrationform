


import sha from 'js-sha256';
import AWN from 'awesome-notifications';

const notifier = new AWN();

const inputForEmail = document.getElementById('email');
const password = document.getElementById('password');
const form = document.getElementById('form-login');


let users = JSON.parse(localStorage.getItem('Users')) || [];
let loginedUser;

function Session(userId) {
    this.userId = userId;
    this.sessionTime = Date.now() + 1000 * 15;
}

function loginIn(users, email, password){
    if(users.some(el => el.email === email.value && el.password === sha(password.value))) {
        loginedUser = users.find(el => el.email === email.value && el.password === sha(password.value));
        sessionStorage.setItem('LoginedUser', JSON.stringify(new Session(loginedUser.id)))
        notifier.success('Welcome', {durations: {success: 3000}});
        setTimeout(() => {
            window.location = '/profile.html';
        }, 1000);
        return;
    }
    if(users.some(el => el.email === email.value)) {
        notifier.warning('Password Is Not Correct', {durations: {success: 3000}});
        return;
    } else {
        notifier.warning('User Not Found', {durations: {success: 3000}});
    }
}

form.addEventListener('submit', e => {
    e.preventDefault();
    loginIn(users, inputForEmail, password);
});






