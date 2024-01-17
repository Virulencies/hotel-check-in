import rooms from './roomdata.js';

//Global Variables
let currentCustomer = null; // store the current customer


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
    const roomDetailsSection = document.getElementById('room-details');
    roomDetailsSection.innerHTML = ''; // Clear existing content

    const roomName = document.createElement('h2');
    roomName.textContent = room.name;

    const roomImage = document.createElement('img');
    roomImage.src = room.image;
    roomImage.alt = `Image of ${room.name}`;
    roomImage.className = 'room-detail-image';

    const roomInfo = document.createElement('p');
    roomInfo.textContent = `Beds: ${room.beds}, Price per night: $${room.pricePerNight.toFixed(2)}, Available: ${room.available ? 'Yes' : 'No'}`;

    roomDetailsSection.appendChild(roomName);
    roomDetailsSection.appendChild(roomImage);
    roomDetailsSection.appendChild(roomInfo);

    roomDetailsSection.classList.remove('hidden'); // Show the room details section
}

// All on DOM load listeners
document.addEventListener('DOMContentLoaded', () => {
    const loginBtn = document.getElementById('login-btn');
    const viewRoomsBtn = document.getElementById('view-rooms');

    if (loginBtn) {
        loginBtn.addEventListener('click', toggleLoginForm);
    }

    if (viewRoomsBtn) {
        viewRoomsBtn.addEventListener('click', displayRooms);
    }
});

export { toggleLoginForm, displayRooms, showRoomDetails };

