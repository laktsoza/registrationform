

const profileUsername = document.getElementById('profile-username');
const usersList = document.getElementById('users-list');

let users = JSON.parse(localStorage.getItem('Users')) || [];


let loginedUser = JSON.parse(sessionStorage.getItem('LoginedUser'));


function checkvalidation(){
    if(loginedUser.sessionTime > Date.now()) {
        profileUsername.textContent = users.find(el => el.id === loginedUser.userId).username;
        users.forEach(element => {
            if(loginedUser.userId !== element.id) {
                console.log(5);
                let li = document.createElement('li');
                let div = document.createElement('div');
                let button = document.createElement('button');
                div.textContent = element.username;
                button.textContent = 'follow';
                li.appendChild(div);
                li.appendChild(button);
                usersList.appendChild(li);
            }
        });
    } else {
        window.location = 'http://127.0.0.1:5500/dist/login.html';
    }
}



checkvalidation();