// Setup / Data
// ------------------------------------------
var startupX = ['Uber', 'Google', 'Amazon', 'Apple', 'Facebook', 'Twitter', 'Line', 'Four Square'];
var startupY = ['Slack', 'Trello', 'Tesla', 'Hyperloop', 'Harvest', 'SnapChat', 'Pokemon Go'];
var startupIdea;
var favorites = [];


// Structure
// ------------------------------------------
var startup  = document.querySelector('.startup');
var generate = document.querySelector('.generate');
var save     = document.querySelector('.save');
var print    = document.querySelector('.print');
var list     = document.querySelector('.list');


// Events
// ------------------------------------------
generate.addEventListener('click', generateStartup);
save.addEventListener('click', saveFavorite);
print.addEventListener('click', printFavorites);


// Event Listeners
// ------------------------------------------
	// TODO: generate two random index numbers, one for each array
//var rand1Array = startupX[rand1];	
//var rand2Array = startupY[rand2];
//var rand1 = startupX[Math.floor(Math.random() * startupX.length)];
//var rand2 = startupY[Math.floor(Math.random() * startupY.length)];

function generateStartup(event) {
	var rand1 = startupX[Math.floor(Math.random() * startupX.length)];
    var rand2 = startupY[Math.floor(Math.random() * startupY.length)];
    console.log(rand1, rand2);


	 // TODO: concatenate the fixed text with the two random values
	//to create a new startup idea like:
   //"A startup that is Apple, but for Trello"
	startupIdea = 'A startup that is '+rand1+', but for '+rand2;	
   // Update page with new startup idea
	startup.innerHTML = startupIdea;
};

function saveFavorite() {

	// TODO: add the new idea to the array


}

function printFavorites() {
	var favoritesText;

	// clear out favorites element
	list.innerHTML = '';

	// TODO: concatenate all the favorites into one string
	// - hint: loop through all the favorites
	// - this should be stored in a variable named favoritesText
	// - each favorite should have an html br element between it (EG: "<br>")


	// update the list element with the new concatenated string
	list.innerHTML = favoritesText;
}


// Init
// ------------------------------------------
generateStartup();

