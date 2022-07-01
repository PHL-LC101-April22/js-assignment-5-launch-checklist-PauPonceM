// Write your JavaScript code here!

const scriptHelper = require("./scriptHelper");



window.addEventListener("load", function() {
    const faultyItemsE = document.getElementById("faultyItems");
    faultyItemsE.style.visibility = "hidden";
    let form = document.querySelector("#form");
    const propagation = true;
    form.addEventListener("submit", function(event){
        let pilotNameInput= document.forms["testForm"]["pilotName"].value;
        let copilotNameInput = document.forms["testForm"]["copilotName"].value;
        let fuelLevelInput = document.forms["testForm"]["fuelLevel"].value;
        let cargoMassInput = document.forms["testForm"]["cargoMass"].value;
     if(scriptHelper.formSubmission(document, faultyItemsE, pilotNameInput, copilotNameInput, fuelLevelInput, cargoMassInput) === "Empty"){
         alert("All fields are required!");
     }else if (scriptHelper.formSubmission(document, faultyItemsE, pilotNameInput, copilotNameInput, fuelLevelInput, cargoMassInput) === "Invalid") {
         alert("Make sure t enter valid information for each field!");
     }
     event.preventDefault();
});

   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse = scriptHelper.myFetch();
   listedPlanetsResponse.then(function (json){   
    // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
       listedPlanets = scriptHelper.pickPlanet(json);
       scriptHelper.addDestinationInfo(document, listedPlanets["name"], listedPlanets["diameter"], listedPlanets["star"], listedPlanets["distance"],listedPlanets["moons"], listedPlanets["image"]);
       console.log(listedPlanets);
   });
    });
   


