// Setup
// ------------------------------------------
var options = {
    enableHighAccuracy: true,
    maximumAge: 3000,
    timeout: 2700
};


// Structure
// ------------------------------------------
var button    = document.querySelector('main button');
var locations = document.querySelector('main .locations');
var error     = document.querySelector('main .error');


// Events
// ------------------------------------------
button.addEventListener('click', clickButton);


// Event Handlers
// ------------------------------------------
function clickButton(event) {
	console.log('clickButton', event);

	var el = document.querySelector('#google-map');

	// map options
	// --------------
	var options = {
		center: { lat: 36.7783, lng: -119.4179 },
		zoom: 5
	};

	// create a new google map object
	var map = new google.maps.Map(el, options);


	// use the geolocation api to get the current position
	// - setup the callback for when position is determined
	navigator.geolocation.getCurrentPosition(geoSuccess);

	function geoSuccess(position) {
		console.log("geoSuccess", position);

		// extract the lat & long from the position/coordinate object
		var latitude = position.coords.latitude;
		var longitude = position.coords.longitude;

		// put a new marker on the map
		var marker = new google.maps.Marker({
			map: map,
			position: {
				lat: latitude,
				lng: longitude
			}
		})

		// re-center and zoom in the map with your location
		map.setCenter( { lat: latitude, lng: longitude } ); 
		map.setZoom(17);
	}

}



// Geolocation callback functions
// ------------------------------------------




// Update page functions
// ------------------------------------------




// Callback when Google Maps has loaded
// ------------------------------------------




// Add / update the location marker
// ------------------------------------------
