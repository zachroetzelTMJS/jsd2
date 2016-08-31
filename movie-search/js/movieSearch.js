// Setup
// ----------------------------------------------
var form    = document.querySelector("form");
var movies  = document.querySelector("form .search");
var results = document.querySelector(".results");

//var list = document.createElement("li");

// Structure
// ----------------------------------------------
form.addEventListener('submit', getMovies);

//list.addEventListener('click', movieDetails);

// Events
// ----------------------------------------------

function getMovies(event) {
	event.preventDefault();
	
	var search = movies.value;
	console.log("getMovies", search);
	
	var url = "http://omdbapi.com/?s=" + search;

	$.getJSON(url, updateMovies);
}
// Event handlers
// -----------------------------------------------


function createMovie(movie) {
	console.log("MOVIE IS A MOUSE EVENT: %o", movie);
	
	
	var list = document.createElement("li");
	var img  = document.createElement("img");
	var h2   = document.createElement("h2");
	var p    = document.createElement("p");
	var a    = document.createElement("a");

	list.id       = movie.imdbID;
	img.src       = movie.Poster;
	a.textContent = movie.Title
	a.href        = "http://www.omdbapi.com/?i=" + movie.imdbID

	a.addEventListener('click', movieDetails);
	console.log('moveDetails: %o', movie);

	// console.log('createMovie', a)

	list.appendChild(img);
	list.appendChild(h2);
	list.appendChild(a);

	results.appendChild(list);

	// console.log(createMovie);

	//$.getJSON(a, movieDetails);

}

// Update page
// ----------------------------------------------

function updateMovies(json) {
	console.log('updateMovies',json);

	//clears out old results
	results.innerHTML = ''; 
	var movieArray = json["Search"];
	console.log(movieArray);
	movieArray.forEach(createMovie);
}

function movieDetails(e) {
	 e.preventDefault();

	 //var details = Object["imdbID"];
	 console.log("movieDetails", e);

	//console.log("getMovies", search);
	//var details = json.Search(getMovies)

	//console.log ('getMovies', details)
	//var ul = results
	//var details = ul.li.id
	//console.log(details)
	//document.getElementByID('.results').addEventListener('click', movieDetails);	
	//console.log('movieDetails', list)

	//var newURL = "http://omdbapi.com/?i=" + results.ul.li.id

	//console.log(url)
	//$.getJSON(e);

	//$.getJSON(url, getMovies);
	jsonURL = e.target.href;


	console.log(jsonURL);
	$.getJSON(jsonURL, function(result) { 

		// Step 1 - create elements
		var div  = document.querySelector(".details")
		var img  = document.querySelector(".poster")
		var h2   = document.querySelector(".title")
		var p    = document.querySelector(".plot")
		var a    = document.querySelector(".imdb-link")

		// Step 2 - add content / attributes
		// div.textContent = 


		img.src      = result.Poster;
		h2.innerHTML = result.Title;
		p.innerHTML  = result.Plot;
		a.href       = "http://www.imdb.com/title/" + result.imdbID;

		// // Step 3 - append to parents
		// //div.appendChild(div);
		// div.appendChild(img);
		// div.appendChild(h2);
		// div.appendChild(p);
		// p.appendChild(a);

	});

};
