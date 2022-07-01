// Write your helper functions here!

require('isomorphic-fetch');




function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   
   document.getElementById("missionTarget").innerHTML= `
    <h2>Mission Destination</h2>
    <ol>
        <li>Name: ${name} </li>
        <li>Diameter:${diameter} </li>
        <li>Star: ${star}</li>
        <li>Distance from Earth: ${distance} </li>
        <li>Number of Moons:${moons}</li>
    </ol>
    <img src=${imageUrl}>`
   
}

function validateInput(testInput) {
if (testInput=== '') {
    return "Empty";
} else if (isNaN(Number(testInput))) {
    return "Not a number";
} else if (!isNaN(testInput)) {
    return "Is a number";
}
}
 

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {

    if(validateInput(pilot) === 'Empty' || validateInput(copilot) === 'Empty' || validateInput(fuelLevel) === 'Empty' || validateInput(cargoLevel) === 'Empty'){
        return "Empty";
    } else {
   document.getElementById("pilotStatus").innerHTML= `Pilot ${pilot} is ready for launch!`;
   document.getElementById("copilotStatus").innerHTML= `Co-pilot ${copilot} is ready for launch!`;
}

   if (isNan(Number(fuelLevel))){
    return "Invalid";
   }else if (Number(fuelLevel) < 10000) {
    list.style.visibility = 'visible';
    document.getElementById('fuelStatus').innerHTML = 'Not enough fuel for launch!';
    document.getElementById('launchStatus').innerHTML = 'Shuttle not ready for launch';
    document.getElementById('launchStatus').style.color = 'rgb(160, 15, 15)';

 if (isNan(Number(cargoLevel))){
    return "Invalid";
   } else if (Number(cargoLevel) > 10000) {
    list.style.visibility = 'visible';
    document.getElementById('cargoStatus').innerHTML = 'Too much cargo mass for launch!';
    document.getElementById('launchStatus').innerHTML = 'Shuttle not ready for launch';
    document.getElementById('launchStatus').style.color = 'rgb(160, 15, 15)';

   } else if (Number(fuelLevel) >= 10000 && Number(cargoLevel) <= 10000) {
    list.style.visibility = 'visible';
    document.getElementById('launchStatus').innerHTML = 'Shuttle is ready for launch';
    document.getElementById('cargoStatus').innerHTML = "Cargo mass low enough for launch"
    document.getElementById('launchStatus').style.color = 'rgb(13, 82, 28)';
   }
   return "Valid";
}
}
async function myFetch() {
    let planetsReturned;
    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response){
        return response.json();
            });
            return planetsReturned;
}
   

function pickPlanet(planets) {
let index = Math.floor(Math.random() * planets.length);
return planets[index];
}


module.exports = {addDestinationInfo, validateInput, formSubmission, pickPlanet, myFetch};

