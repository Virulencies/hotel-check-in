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

function viewBookings() {
    fetch('http://localhost:3001/api/v1/bookings')
        .then(response => response.json())
        .then(data => {
            console.log('Bookings:', data);
            // Populate bookings on the customer dashboard
        })
        .catch(error => console.error('Error fetching bookings:', error));
}

function deleteBooking(bookingId) {
    fetch(`http://localhost:3001/api/v1/bookings/${bookingId}`, {
        method: 'DELETE'
    })
    .then(response => {
        if (response.ok) {
            console.log('Booking deleted');
            // Handle successful deletion (e.g. update ui)
        } else {
            throw new Error('Failed to delete booking. Please contact management.'); //shouldnt happen ever?
        }
    })
    .catch(error => console.error('Error deleting booking:', error));
}    

function bookRoom() {
    //  'rooms' is an array of room objects with 'id' or 'number' properties
    const randomRoomNumber = rooms[Math.floor(Math.random() * rooms.length)].id; // or .number, depending on your dataset

    const bookingData = {
        userID: currentCustomer.id, // Ensure this is a valid and expected userID
        date: new Date().toISOString().split('T')[0].replace(/-/g, '/'), // Format date as 'YYYY/MM/DD'
        roomNumber: randomRoomNumber
    };

    fetch('http://localhost:3001/api/v1/bookings', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(bookingData)
    })
    .then(response => {
        if (!response.ok) {
            return response.json().then(err => { throw err; });
        }
        return response.json();
    })
    .then(data => {
        console.log('Booking successful:', data);
    })
    .catch(error => {
        console.error('Error booking room:', error);
    });
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


function displayBookings(bookings) {
    const dashboard = document.getElementById('customer-dashboard');
    dashboard.innerHTML = ''; // Clear previous bookings

    bookings.forEach(booking => {
        const bookingDiv = document.createElement('div');
        bookingDiv.innerHTML = `Date: ${booking.date}, Room: ${booking.roomNumber}`;
        
        // Delete button for each booking
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete Booking';
        deleteButton.onclick = () => deleteBooking(booking.id);

        bookingDiv.appendChild(deleteButton);
        dashboard.appendChild(bookingDiv);
    });
}



document.addEventListener('DOMContentLoaded', () => {
    initializePage();
    const loginForm = document.getElementById('login-form');
    if (loginForm) loginForm.addEventListener('submit', handleLoginSubmission);
});

export { bookRoom }