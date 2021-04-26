/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!************************!*\
  !*** ./src/profile.js ***!
  \************************/
var profileUsername = document.getElementById('profile-username');
var usersList = document.getElementById('users-list');
var users = JSON.parse(localStorage.getItem('Users')) || [];
var loginedUser = JSON.parse(sessionStorage.getItem('LoginedUser'));

function checkvalidation() {
  if (loginedUser.sessionTime > Date.now()) {
    profileUsername.textContent = users.find(function (el) {
      return el.id === loginedUser.userId;
    }).username;
    users.forEach(function (element) {
      if (loginedUser.userId !== element.id) {
        console.log(5);
        var li = document.createElement('li');
        var div = document.createElement('div');
        var button = document.createElement('button');
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
/******/ })()
;