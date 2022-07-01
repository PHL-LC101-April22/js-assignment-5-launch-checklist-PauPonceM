// Write your JavaScript code here!

const { myFetch, pickPlanet } = require("./scriptHelper");

window.addEventListener("load", function() {

let form = document.querySelector("testForm");
form.addEventListener("submit", function(event){
    let pilotNameInput= document.forms["testForm"]["pilotName"].value;
    let copilotNameInput = document.forms["testForm"]["copilotName"].value;
    let fuelLevelInput = document.forms["testForm"]["fuelLevel"].value;
    let cargoMassInput = document.forms["testForm"]["cargoMass"].value;

    if (pilotNameInput === "" || copilotNameInput ==="" || fuelLevelInput === "" || cargoMassInput ===""){
        alert("All fields are required!");
        event.preventDefault;
    } else if (!isNan(pilotNameInput) || !isNan(copilotNameInput) || isNan(fuelLevelInput) || isNan(cargoMassInput)){
        alert("Make sure to enter valid information for each field!");
        event.preventDefault;
    }

    scriptHelper.formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel);

   
    document.getElementById('faultyItems').style.visibility = 'hidden';

})


   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse = scriptHelper.myFetch();
   listedPlanetsResponse.then(function (result){
    listedPlanets = result;
    console.log(listedPlanets);
   }).then(function(){
    console.log(listedPlanets);
   })
   
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
    let p= scriptHelper.pickPlanet(listedPlanetsResponse);
    scriptHelper.addDestinationInfo(document, p.name, p.diameter, p.star, p.distance, p.moons, p.image);

   })
