//Initializes the game in a server environment
function init_async()
{
	$.getJSON("data/characters.json", function(jsonCharacters) {
		characters = jsonCharacters;
		initCharacters();

		$.getJSON("data/places.json", function(jsonPlaces) {

			places = jsonPlaces;
			$.getJSON("data/story.json", function(jsonStory) {

				story = jsonStory;
				parseStory();
				onInit();
			});
		});
	});
}

//Initialize the character data after the data has been loaded
function initCharacters()
{
}

//Called when the game is fully initialized
function onInit()
{
	//start the game on the first Scene
	displayScene("start");
}

init_async();
