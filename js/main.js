//Initializes the game in a local/offline environment
//This assumes that data/processed-data.js has been generated, using the build.bat script
//It also requires the data to be rebuilt everytime a change is made in the characters, places or story files.
function init_local()
{
	initCharacters();
	parseStory();
	onInit();
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
init_local();
