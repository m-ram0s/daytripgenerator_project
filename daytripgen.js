let destination = ['New York', 'Miami', 'Las Vegas', 'Seattle'];
let restaurant = ['Olive Garden', 'Chilis', 'Mission BBQ', 'Red Robin'];
let transportation = ['Airplane', 'Automobile', 'Boat', 'Horse'];
let entertainment = ['Theater', 'Ball Game', 'Concert', 'Golf'];


let randomDest = Math.floor(Math.random() * destination.length);
   // console.log(destination[randomDest]);
let randomRest = Math.floor(Math.random() * restaurant.length);
   // console.log(restaurant[randomRest])
let randomTran = Math.floor(Math.random() * transportation.length);
   // console.log(transportation[randomTran]);
let randomEnt = Math.floor(Math.random() * entertainment.length);
   // console.log(entertainment[randomEnt]);

let newLine = "\r\n"
alert("Click the button to randomly generate a trip!:");
alert("Destination:  " + destination[randomDest] + newLine + "Restaurant: " + restaurant[randomRest] + newLine + "Mode of transportation: " + transportation[randomTran] + newLine + "Form of entertainment: " + entertainment[randomEnt]);

let userAnswer = prompt('Are you satisfied with the random selections? If you are, enter Yes. Enter NO if you would like to re-select your options:');
    if (userAnswer === 'Yes'){
        alert('Your day trip plan is complete.')
        console.log('Your complete trip:', destination[randomDest], '-', restaurant[randomRest], '-', transportation[randomTran], '-', entertainment[randomEnt]);
    }   else (userAnswer !== 'Yes')
    
let userAnswerTwo = prompt('Which item would you like to re-select?\nEnter 0 for none: \nEnter 1 for a new destination: \nEnter 2 for a new restaurant: \nEnter 3 for a new mode of transportation: \nEnter 4 for a new form of entertainment: ');
    if (userAnswerTwo === '0'){
        alert('Your day trip plan is complete.')
    }
        else if (userAnswerTwo === '1'){
            let newDest = rerollArray(destination);
            alert("Your new destination is: " + newDest);
    }
        else if (userAnswerTwo === '2'){
            let newRest = rerollArray(restaurant);
            alert("Your new restaurant is: " + newRest);
    }
        else if (userAnswerTwo === '3'){
            let newTran = rerollArray(transportation);
            alert("Your new mode of transportation is: " + newTran);
    }
        else if (userAnswerTwo === '4'){
            let newEnt = rerollArray(entertainment);
            alert("Your new form of entertainment is: " + newEnt);
    }

alert("Enjoy your trip!");

function rerollArray(arrayOne){
    let randomValue = Math.floor(Math.random() * arrayOne.length);
    return arrayOne[randomValue];
}