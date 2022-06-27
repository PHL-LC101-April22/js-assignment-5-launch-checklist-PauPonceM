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
   
}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
        response.json().then(function(planetsReturned){  
            return planetsReturned;
        });
        });
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
