// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you tell webpack to use a CSS (SCSS) file
import './css/styles.css';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'


console.log('This is the JavaScript entry file - your code begins here.');

// Targeting and Event Listeners
document.getElementById('login-btn').addEventListener('click', function() {
    var loginForm = document.getElementById('login-form');
    loginForm.classList.toggle('hidden');
});

document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    console.log('Logged in with credentials:', username, password)
});

document.getElementById('view-rooms').addEventListener('click', function() {
    //logic to fetch the room data and display it
    console.log('Fetching and displaying available rooms');
    // rplace this later with actual functionality
});
