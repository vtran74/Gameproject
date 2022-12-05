function onChoiceClicked(targetSceneId)
{
	//Redirects player to an ending page if the target of the choice is called "end"
	if(targetSceneId.toLowerCase() == "end")
	{
		location = "end.html";
		return true;
	}

	return false;
}
