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

function validateInput() {
if (!testInput) {
    return "Empty";
} else if (isNaN(testInput)) {
    return "Not a number";
} else if (!isNaN(testInput)) {
    return "Is a number";
}
}
 

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
   document.getElementById("pilotStatus").innerHTML= `Pilot ${pilot} is ready for launch!`;
   document.getElementById("copilotStatus").innerHTML= `Co-pilot ${copilot} is ready for launch!`;

   if (fuelLevel < 10000) {
    list.style.visibility = 'visible';
    document.getElementById('fuelStatus').innerHTML = 'Not enough fuel for launch!';
    document.getElementById('launchStatus').innerHTML = 'Shuttle not ready for launch';
    document.getElementById('launchStatus').style.color = rgb(160, 15, 15);

   } else if (cargoLevel > 10000) {
    list.style.visibility = 'visible';
    document.getElementById('cargoStatus').innerHTML = 'Too much cargo mass for launch!';
    document.getElementById('launchStatus').innerHTML = 'Shuttle not ready for launch';
    document.getElementById('launchStatus').style.color = rgb(160, 15, 15);

   } else if (fuelLevel >= 10000 && cargoLevel <= 10000) {
    list.style.visibility = 'visible';
    document.getElementById('launchStatus').innerHTML = 'Shuttle is ready for launch';
    document.getElementById('launchStatus').style.color = rgb(13, 82, 28);

   }

}

async function myFetch() {
    let planetsReturned;

     await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
        response.json().then(function(json){
            planetsReturned = document.getElementById("missionTarget");
        })  
        });
        return planetsReturned;
        };
   

function pickPlanet(planets) {
    fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
        response.json().then(function(planet){
    let randomPlanet = document.getElementById("missionTarget");
    let index= Math.floor(Math.random() * (planet.length));
   return randomPlanet.innerHTML += `
    <h2>Mission Destination</h2>
    <ol>
        <li>Name: ${planet[index].name} </li>
        <li>Diameter:${planet[index].diameter} </li>
        <li>Star: ${planet[index].star}</li>
        <li>Distance from Earth: ${planet[index].distance} </li>
        <li>Number of Moons:${planet[index].moons}</li>
    </ol>
    <img src=${planet[index].image}>
    `
        });
    });
}


module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
