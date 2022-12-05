//initalize
var scenes = {};
var characters = {};
var places = {};
var variables = {};

//Clears scene, removes every choice and character that was added in the previous scene
function clearScene()
{
	$(".choice").remove();
  $(".character").remove();
}

function displayCharacter(characterData)
{
  if(!(characterData.id in characters))
  {
    console.error("Character "+characterData.id+" does not exist.");
    characterData.id = "default";
    characterData.pose = "hidden";
  }
  var character = characters[characterData.id];

  //Display character name
	$("#characterName").html(character.name);

  //Set the character and pose attributes of the container
  $("#container").attr("character", characterData.id);
  $("#container").attr("pose", characterData.pose);

  //character has no image on display
  if(characterData.pose != "hidden")
  {
    var existElement = $('#character');
    if(existElement) {
      existElement.remove();
    }
    //create characterelement and set its background before adding to scene
    var characterElement = $('<img id="character">'); //Equivalent: $(document.createElement('img'))
    console.log(character.poses['' + characterData.pose + '']);
    if(character.poses['' + characterData.pose + ''] !== undefined)
    {
      characterElement.attr('src', character.poses['' + characterData.pose + '']);
      characterElement.attr('height', '550px');
      characterElement.attr('width', '430px');
      $("#sceneContent").append(characterElement);
    }  
  }
}

function displayChoices(choices)
{
  //choices holds array of choice
	for(var c in choices)
	{
		var choice = choices[c];

    //Is there conditions for this choice??
    if(choice.conditions.length > 0)
    {
      display = true;
      //check condition one by one
      for(var c in choice.conditions)
      {
        var condition = choice.conditions[c];
        display = display && evaluateCondition(condition);
        //don't need to check rest of list if false, all need to be true
        if(!display) break;
      }
      //user can't access this choice rn, skip to the next.
      if(!display) continue;
    }

    //available choices will be displayed in the list
		$("#choices").append("<div class='choice' data-target="+choice.target+">"+choice.text+"</a></div>");
	}
}

function displayPlace(placeId)
{
  if(!(placeId in places))
  {
    console.error("Place "+placeId+" does not exist.");
    return;
  }
  var place = places[placeId];
  
  //Show place name
  $("#placeName").html(place.name);
  //Set place attribute in the container
  $("#container").attr("place", placeId);
  //Display the place's image as the background
  displayBackground(place.image);
}

function displayBackground(url)
{
	$("#sceneContent").css({"background-image":"url('"+url+"')"}).css({"background-size":"cover"});
}

function displayScene(sceneId)
{	
  //Clear the scene
	clearScene();

  //Checks if the scene needed to display exists?
  if(!(sceneId in scenes))
  {
    console.error("Scene "+sceneId+" not found.");
    return;
  }
	var currentScene = scenes[sceneId];

  //Handles every action in this scene
  for(var a in currentScene.actions)
  {
    var action = currentScene.actions[a];
    executeAction(action);
  }

	displayCharacter(currentScene.character);

	displayChoices(currentScene.choices);
}

//Upon clicking on a choice
$(document).on("click", ".choice", function()
{
  //Call the custom code that handles choice clicks
  if( !onChoiceClicked($(this).data("target")) )
  {
    displayScene($(this).data("target"));
  }
});
