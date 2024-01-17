// Importing images
import aquariumImg from './images/aquarium.png';
import duchessImg from './images/duchess.png';
import heiressImg from './images/heiress.png';
import mayorImg from './images/mayor.png';
import pharaohImg from './images/pharaoh.png';
import shogunImg from './images/shogun.png';
import sultanImg from './images/sultan.png';

const rooms = [
    {
        name: "Aquarium Suite",
        beds: 3,
        pricePerNight: 2120.10,
        image: aquariumImg,
        roomNumber: 1
    },
    {
        name: "Duchess Suite",
        beds: 1,
        pricePerNight: 750,
        image: duchessImg,
        roomNumber: 20
    },
    {
        name: "Heiress Suite",
        beds: 1,
        pricePerNight: 1250.50,
        image: heiressImg,
        roomNumber: 7
    },
    {
        name: "Mayor Suite",
        beds: 2,
        pricePerNight: 520,
        image: mayorImg,
        roomNumber: 13
    },
    {
        name: "Pharaoh Suite",
        beds: 1,
        pricePerNight: 1990,
        image: pharaohImg,
        roomNumber: 9

    },
    {
        name: "Shogun Suite",
        beds: 2,
        pricePerNight: 1100,
        image: shogunImg,
        roomNumber: 21
    },
    {
        name: "Sultan Suite",
        beds: 1,
        pricePerNight: 1750,
        image: sultanImg,
        roomNumber: 18
    }
];

export default rooms;
