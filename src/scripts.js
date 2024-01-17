// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

import './css/styles.css';

// Importing images
import './images/turing-logo.png';

// Importing functions from DOM.js, which is in the same directory
import { toggleLoginForm, displayRooms, showRoomDetails } from './DOM.js';
import rooms from './roomdata.js';

console.log('This is the JavaScript entry file - your code begins here.');

//Fetch Requests

function fetchCustomers() {
    return fetch('http://localhost:3001/api/v1/customers')
        .then(response => response.json())
        .then(data => data.customers)
        .catch(error => console.log('Error fetching customers:', error));
}

// Functions
let currentCustomer = null; // store the current customer

function initializePage() {
    fetchCustomers().then(customers => {
        if (customers && customers.length > 0) {
            currentCustomer = customers[Math.floor(Math.random() * customers.length)];
            console.log(`Welcome back, ${currentCustomer.name}. Your membership ID is ${currentCustomer.id}. Please log in to verify your credentials.`);
        }
    });
}

function handleLoginSubmission(event) {
    event.preventDefault();
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    console.log(`Entered username: ${username}`);
    console.log(`Entered password: ${password}`);
    console.log(`Expected username: ${currentCustomer.name}`);
    console.log(`Expected password: ${String(currentCustomer.id)}`); //read the ID as a string

    if (currentCustomer && username === currentCustomer.name && password === String(currentCustomer.id)) {
        alert(`Logged in successfully as ${username}`);
        // Add more actions after successful login, like displaying customer dashboard stuff
    } else {
        alert('Incorrect credentials. Please try again.');
    }
    document.getElementById('username').value = '';
    document.getElementById('password').value = '';
}

document.addEventListener('DOMContentLoaded', () => {
    initializePage();
    const loginForm = document.getElementById('login-form');
    if (loginForm) loginForm.addEventListener('submit', handleLoginSubmission);
});