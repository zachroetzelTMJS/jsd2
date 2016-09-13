// Elements
// ------------------------------------
var form = document.querySelector("form");
var show = document.querySelector("form .keyword");
var results = document.querySelector(".results");
var tvshowTemplate = document.querySelector("#tvshow-template");
var headerTemplate = document.querySelector("#header-template");

// Event
// ------------------------------------
form.addEventListener('submit', getShowlist);


// Event Handler 
// ------------------------------------
function getShowlist(event) {
	console.log('Calling')
	event.preventDefault();

	var search = show.value;
	console.log(search);

	var url = "https://api.themoviedb.org/3/search/tv?api_key=e3dcc070a2e3e601e513b356cbaeaf8a&query=" + search;

	$.getJSON(url, updateShowlist);
}

// Update page
// ------------------------------------
function updateShowlist(json) {
	console.log('updateShowlist',json);

	// clears out the old results
	results.innerHTML = '';

	var template = Handlebars.compile(headerTemplate.innerHTML);
	// This is compiling the template source from the <script> tag into a Handlebars template
	var template = Handlebars.compile(tvshowTemplate.innerHTML);

	// var thumbnail = document.querySelector("img");

// For handling broken/missing poster images
// --------------------------------------------
	/*function subImage(json) {
		console.log('subImage', thumbnail)
		if (results.poster_path === null) {
			thumbnail = "http://i.imgur.com/N31GfGy.jpg?1";
		} else {

			return

		}	
	} */

	// Saving in a variable first
	var html = template(json.results);
	results.innerHTML = html; 


}
