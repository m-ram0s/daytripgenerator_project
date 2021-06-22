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

alert('Welcome to your trip generator. Click OK to find a destination:');
alert(destination[randomDest]);

alert('Click OK to find a restaurant:');
alert(restaurant[randomRest]);

alert(' Click OK to find a mode of transportation:');
alert(transportation[randomTran]);

alert('Click OK to find a form of entertainment:');
alert(entertainment[randomEnt]);

let userAnswer = prompt('Are you satisfied with the random selections? If you are, enter YES. Enter NO if you would like to re-select your options:');
    while (userAnswer != 'YES'){
    }
    if (userAnswer == 'YES'){
        alert('Your day trip is complete. Enjoy!')
        console.log('Your complete trip:', destination[randomDest], '-', restaurant[randomRest], '-', transportation[randomTran], '-', entertainment[randomEnt]);
    }
    // else if (userAnswer !== 'YES');{
    //     console.log('No worries, please select again until you are satisfied!')
    //     //alert('No worries, please select again until you are satisfied!');
    // }