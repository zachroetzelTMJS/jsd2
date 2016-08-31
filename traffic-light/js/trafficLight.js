// Setup
// ----------------------------------------------



// Structure
// ----------------------------------------------
var stopButton = document.querySelector(".stop-button");
var slowButton = document.querySelector(".slow-button");
var goButton = document.querySelector(".go-button");
var cautionButton = document.querySelector(".caution-button");
var trafficLight = document.querySelector("#traffic-light")


// Events
// ----------------------------------------------
stopButton.addEventListener("click", stop);
slowButton.addEventListener("click", slow);
goButton.addEventListener("click", go);
cautionButton.addEventListener("click", caution);


// Event handlers
// ----------------------------------------------
function stop(event) {
  trafficLight.classList.add("stop");
  trafficLight.classList.remove("slow");
  trafficLight.classList.remove("go");
}

function slow(event) {
  trafficLight.classList.remove("stop");
  trafficLight.classList.add("slow");
  trafficLight.classList.remove("go");
}

function go(event) {
  trafficLight.classList.remove("stop");
  trafficLight.classList.remove("slow");
  trafficLight.classList.add("go");
}

function caution(event) {

  slow(event);

  setInterval(function() {
    trafficLight.classList.toggle("slow");
  }, 1000);
  trafficLight.classList.remove("stop");
  trafficLight.classList.remove("go");
  trafficLight.classList.remove("slow");
}



