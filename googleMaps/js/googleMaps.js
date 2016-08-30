

var mapEl = document.querySelector('.map');
var options = {
	center: {lat: 37.790841, lng: -122.40128},
	zoom: 10

}


function initMap() {
	console.log("initMap");


	var map;


	map = new google.maps.Map(mapEl, options)

	var marker = new google.maps.Marker({
		map: map,
		title: "GA",
		position: {lat: 37.790841, lng: -122.40128,}

	})

function displayResults(results, status) {
	console.log('displayResults');
}

function createMarker(place) {
	var marker = new google.maps.Marker({
		map: map,
		title: "GA",
		position: place.geometry.location
	});
}

navigator.geolocation.getCurrentPosition(updateLocation);
	
function updateLocation() {
	console.log('updateLocation');
}

}