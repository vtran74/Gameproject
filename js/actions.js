// <<string door = locked>>
function executeStringAction(action)
{
  var key = action.options[0].toLowerCase();
  var value = action.options[1];
  variables[key] = value;
}

// <<place location>>
function executePlaceAction(action)
{
  displayPlace(action.options[0].toLowerCase());
}

function executeCustomAction(action)
{
  var type = action.type.toLowerCase();
  if(type in customActions)
  {
    customActions[type](action);
  } else 
  {
    console.error("Unsupported action type: "+action.type);
  }
}

function executeAction(action)
{
  switch(action.type.toLowerCase())
  {
    case "string":
      executeStringAction(action);
    break;
    case "place":
      executePlaceAction(action);
    break;
    default:
      executeCustomAction(action);
    break;
  }
}
