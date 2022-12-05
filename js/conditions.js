// <<string door == locked>>
// <<string door != locked>>
// <<string door exists>>
function evaluateStringCondition(condition)
{
  result = false;
  var key = condition.options[0].toLowerCase();
  var operator = condition.options[1];
  var value;
  if(condition.options.length > 2)
  {
    value = condition.options[2];
  }
  
  switch(operator.toLowerCase())
  {
    case "==":
      result =  (key in variables &&
                variables[key] == value);
    break;
    case "!=":
      result =  !(key in variables) ||
                (key in variables &&
                  variables[key] != value);
    break;
    case "exists":
      result = (key in variables);
    break;
  }

  return result;
}
function evaluateCustomCondition(condition)
{
  var type = condition.type.toLowerCase();
  if(type in customConditions)
  {
    return customConditions[type](condition);
  } else 
  {
    console.error("Unsupported condition type: "+condition.type);
    return false;
  }
}

function evaluateCondition(condition)
{
  var result = false;
  switch(condition.type.toLowerCase())
  {
    case "string":
      result = evaluateStringCondition(condition);
    break;
    case "number":
      result = evaluateNumberCondition(condition);
    break;
    case "approval":
      result = evaluateApprovalCondition(condition);
    break;
    default:
      result = evaluateCustomCondition(condition);
    break;
  }
  return result;
}
