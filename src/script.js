


import sha from 'js-sha256';
import AWN from 'awesome-notifications';

const notifier = new AWN();

const inputForEmail = document.getElementById('email');
const password = document.getElementById('password');
const RePassword = document.getElementById('re-password');
const registerButton = document.getElementById('submit');

const allData = [];

function Database(email, password){
    this.email = email;
    this.password = password;
}

function checkInputs(){
    if((inputForEmail.value && password.value) && (password.value === RePassword.value)) {
        let email = inputForEmail.value;
        let hashedPassword = sha(password.value);
        let hashedInformaton =  new Database(email, hashedPassword);
        allData.push(hashedInformaton);
        localStorage.setItem('alldata', JSON.stringify(allData));
        notifier.success('Your Registration Has Been Successfully Received', {durations: {success: 3000}});
        inputForEmail.value = '';
        password.value = '';
        RePassword.value = '';
    } 
    if(!(password.value === RePassword.value)) {
        console.log("Something Went Wrong");
        notifier.warning('Please Repeat Password Correctly', {durations: {warning: 3000}});
    }
}

registerButton.addEventListener('click', (e)=>{
    if(inputForEmail.value && password.value && RePassword.value) {
        e.preventDefault();
    }
    checkInputs();
} );





