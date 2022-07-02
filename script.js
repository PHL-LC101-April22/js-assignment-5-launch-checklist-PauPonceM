// Write your JavaScript code here!

window.addEventListener("load", function() {

    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse = myFetch();
    listedPlanetsResponse.then(function (json){   
        listedPlanets = pickPlanet(json);
       addDestinationInfo(document, listedPlanets["name"], listedPlanets["diameter"], listedPlanets["star"], listedPlanets["distance"],listedPlanets["moons"], listedPlanets["image"]);
        console.log(listedPlanets);
    });

    const faultyItemsE = document.getElementById("faultyItems");
    faultyItemsE.style.visibility = "hidden";
    let form = document.querySelector("#form");
    const propagation = true;
    form.addEventListener("submit", function(event){
        let pilotNameInput= document.forms["testForm"]["pilotName"].value;
        let copilotNameInput = document.forms["testForm"]["copilotName"].value;
        let fuelLevelInput = document.forms["testForm"]["fuelLevel"].value;
        let cargoMassInput = document.forms["testForm"]["cargoMass"].value;
     if(formSubmission(document, faultyItemsE, pilotNameInput, copilotNameInput, fuelLevelInput, cargoMassInput) === "Empty"){
         alert("All fields are required!");
     }else if (formSubmission(document, faultyItemsE, pilotNameInput, copilotNameInput, fuelLevelInput, cargoMassInput) === "Invalid") {
         alert("Make sure to enter valid information for each field!");
     }
     event.preventDefault();
});
    });
   


