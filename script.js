// Write your JavaScript code here!
window.addEventListener("load", function(){
   let form = document.querySelector("form");
    form.addEventListener("submit", function(event){
     event.preventDefault();
     let pilotName = document.getElementById("pilotName").value;
     let coPilotName = document.querySelector("input[name=copilotName]").value;
     let fuelLevel = document.querySelector("input[name=fuelLevel]");
     let cargoMass = document.querySelector("input[name=cargoMass]");
     let readyToGo = true;
      if(pilotName === "" || coPilotName === "" || fuelLevel.value === "" || cargoMass.value === "" ){
        alert("All Fields Are Required.")
        readyToGo = false;
      }
       if (!isNaN(pilotName)|| !isNaN(coPilotName) ||isNaN(cargoMass.value) || isNaN(fuelLevel.value)){
         alert("Please Enter Valid Input.")
         readyToGo = false;
       }
      console.log(pilotName, coPilotName, fuelLevel.value, cargoMass.value)
  if(fuelLevel.value < 10000){
      document.getElementById("faultyItems").style.visibility="visible";
      document.getElementById("fuelStatus").innerText = "NOT ENOUGH FUEL FOR JOURNEY";
      document.getElementById("launchStatus").innerText = "Shuttle not ready for launch";
      document.getElementById("launchStatus").style.color="red";
      readyToGo = false;
  }
  if(cargoMass.value > 10000){
      document.getElementById("faultyItems").style.visibility="visible";
      document.getElementById("cargoStatus").innerText = "TOO MUCH MASS FOR SHUTTLE TAKE OFF";
      document.getElementById("launchStatus").innerText = "Shuttle not ready for launch";
      document.getElementById("launchStatus").style.color="red";
      readyToGo = false;
  }
  if (readyToGo === true){
      document.getElementById("faultyItems").style.visibility="visible";
      document.getElementById("launchStatus").style.color="green";
      document.getElementById("launchStatus").innerText = "Shuttle is ready for launch!";
      document.getElementById("fuelStatus").innerText = `Fuel level high enough for launch!`;
      document.getElementById("cargoStatus").innerText = `Cargo mass low enough for launch!`;
      document.getElementById("pilotStatus").innerText = `Pilot ${pilotName} is ready for Launch!`;
      document.getElementById("copilotStatus").innerText = `Co-Pilot ${coPilotName} is ready for Launch!`;
  }
   else {
      document.getElementById("pilotStatus").innerText = `Pilot ${pilotName} is ready for Launch!`;
      document.getElementById("copilotStatus").innerText = `Co-Pilot ${coPilotName} is ready for Launch!`;
       }
//        console.log(pilotName)
      });
      fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
    response.json().then( function(json) {
       const div = document.getElementById("missionTarget");
        let jsonPick = Math.floor(Math.random()*json.length);
        let dataReturned = json[jsonPick]
       // let ind = Math.floor(Math.random()*the length of json);
       // let data = json[ind];
       div.innerHTML = `
          <ol>
              <li>Name: ${dataReturned.name}</li>
              <li>Diameter: ${dataReturned.diameter}</li>
              <li>Star: ${dataReturned.star}</li>
              <li>Distance from Earth: ${dataReturned.distance}</li>
              <li>Number of Moons: ${dataReturned.moons}</li>
          </ol>
          <img src="${dataReturned.image}">
       `;
    });
 });
});
/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/
