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
    form.addEventListener("submit", function(event){
        let pilotNameInput= document.querySelector("div.formField input[name=pilotName]").value;
        let copilotNameInput = document.querySelector("div.formField input[name=copilotName]").value;
        let fuelLevelInput = document.querySelector("div.formField input[name=fuelLevel]").value;
        let cargoMassInput = document.querySelector("div.formField input[name=cargoMass]").value;
     if(formSubmission(document, faultyItemsE, pilotNameInput, copilotNameInput, fuelLevelInput, cargoMassInput) === "Empty"){
         alert("All fields are required!");
     }else if (formSubmission(document, faultyItemsE, pilotNameInput, copilotNameInput, fuelLevelInput, cargoMassInput) === "Invalid") {
         alert("Make sure to enter valid information for each field!");
     }
     event.preventDefault();
});
    });
   


