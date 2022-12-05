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
	for(var c in characters)
	{
		//Set a default approval level for all characters
		characters[c].approval = 0;
	}
}

//Called when the game is fully initialized
function onInit()
{
	//Only one thing left to do: start the game on the first Scene \o/ Here we go~
	displayScene("start");
}

init_async();
