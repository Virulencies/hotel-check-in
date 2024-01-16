
// Funtionality
function toggleLoginForm() {
    var loginForm = document.getElementById('login-form');
    loginForm.classList.toggle('hidden');
}

function handleLoginSubmission(event) {
    event.preventDefault();
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    console.log('Logged in with credentials:', username, password);
}

function displayRooms() {
    console.log('Fetching and displaying available rooms');

}

// Targeting and Event Listeners
document.getElementById('login-btn').addEventListener('click', toggleLoginForm);
document.getElementById('login-form').addEventListener('submit', handleLoginSubmission);
document.getElementById('view-rooms').addEventListener('click', displayRooms);


export { toggleLoginForm, handleLoginSubmission, displayRooms };

