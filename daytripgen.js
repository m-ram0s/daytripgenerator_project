let destination = ['New York', 'Miami', 'Las Vegas', 'Seattle'];
let restaurant = ['Olive Garden', 'Chilis', 'Mission BBQ', 'Red Robin'];
let transportation = ['Airplane', 'Automobile', 'Boat', 'Horse'];
let entertainment = ['Theater', 'Ball Game', 'Concert', 'Golf'];

let randomDest = Math.floor(Math.random() * destination.length);
    console.log(destination[randomDest]);

let randomRest = Math.floor(Math.random() * restaurant.length);
    console.log(restaurant[randomRest]);

let randomTran = Math.floor(Math.random() * transportation.length);
    console.log(transportation[randomTran]);

let randomEnt = Math.floor(Math.random() * entertainment.length);
    console.log(entertainment[randomEnt]);