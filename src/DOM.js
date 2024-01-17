import rooms from './roomdata.js';
import { bookRoom } from './scripts.js'

//Globals
let currentCustomer = null; // store the current customer
/*const loginBtn = document.getElementById('login-btn');
const viewRoomsBtn = document.getElementById('view-rooms');
const loginForm = document.getElementById('login-form');*/

// Funtionality
function toggleLoginForm() {
    var loginForm = document.getElementById('login-form');
    loginForm.classList.toggle('hidden');
}


function displayRooms() {
    // randomly assign availability to each room
    rooms.forEach(room => {
        room.available = Math.random() < 0.5; // 50% chance of being available
    });

    const loginSection = document.getElementById('login-section');
    loginSection.classList.add('hidden');

    const roomsContainer = document.getElementById('rooms-container') || document.createElement('div');
    roomsContainer.id = 'rooms-container';
    roomsContainer.innerHTML = '';
    document.body.appendChild(roomsContainer);

    rooms.forEach(room => {
        const roomCard = document.createElement('div');
        roomCard.className = 'room-card';
        roomCard.onclick = () => showRoomDetails(room);
       // console.log('Showing details for:', room.name);

        const roomImage = document.createElement('img');
        roomImage.src = room.image;
        roomImage.alt = `Image of ${room.name}`;
        roomImage.className = 'room-image';

        const roomName = document.createElement('h3');
        roomName.textContent = room.name;

        const availability = document.createElement('p');
        availability.textContent = room.available ? 'Available' : 'Unavailable';

        roomCard.appendChild(roomImage);
        roomCard.appendChild(roomName);
        roomCard.appendChild(availability);
        roomsContainer.appendChild(roomCard);
    });
}

function showRoomDetails(room) {
    const roomsContainer = document.getElementById('rooms-container');
    if (roomsContainer) {
        roomsContainer.classList.add('hidden');
    }

    const roomDetailsSection = document.getElementById('room-details');
    roomDetailsSection.innerHTML = '';

    // create and append room name
    const roomName = document.createElement('h2');
    roomName.textContent = room.name;
    roomDetailsSection.appendChild(roomName);

    // same for image
    const roomImage = document.createElement('img');
    roomImage.src = room.image;
    roomImage.alt = `Image of ${room.name}`;
    roomImage.className = 'room-detail-image';
    roomDetailsSection.appendChild(roomImage);

    // and the room info
    const roomInfo = document.createElement('p');
    roomInfo.textContent = `Beds: ${room.beds}, Price per night: $${room.pricePerNight.toFixed(2)}, Available: ${room.available ? 'Yes' : 'No'}`;
    roomDetailsSection.appendChild(roomInfo);

    // make the room-details section visible...when it was hidden it wasnt showing up ever, but now this works still for some reason?
    roomDetailsSection.classList.remove('hidden');

    //book now button
    const bookButton = document.createElement('button');
    bookButton.textContent = 'Book Now!';
    bookButton.onclick = () => bookRoom(room.id);
    roomDetailsSection.appendChild(bookButton);
    
}


// All on DOM load listeners
document.addEventListener('DOMContentLoaded', () => {
    // Moved targeting stuff inside DOMContentLoaded
    const loginBtn = document.getElementById('login-btn');
    const viewRoomsBtn = document.getElementById('view-rooms');
    const loginForm = document.getElementById('login-form');

    if (loginBtn) loginBtn.addEventListener('click', toggleLoginForm);
    if (viewRoomsBtn) viewRoomsBtn.addEventListener('click', displayRooms);
    //if (loginForm) loginForm.addEventListener('submit', handleLoginSubmission);

    //initializePage();
});



export { toggleLoginForm, displayRooms, showRoomDetails };

