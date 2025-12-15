var browser = browser || chrome
//array functions
function arrayHardCheck(arr, searchString) {
  return arr.some((arrVal) => searchString === arrVal);
}
function arraySoftCheck(arr, searchString) {
  return arr.some((arrVal) => searchString.includes(arrVal))
}
browser.storage.local.get('settings').then(onGot, onError);

function onError(error) {
  console.log(`Error: ${error}`);
}
function onGot(result) {
  console.log(result)
  ytVideoPref = result.settings.video
  ytSummaryPref = result.settings.summary
}
//get config settings
function xpathSearch(contextNode, xpathExpression){
  const xpathResult = document.evaluate(
  xpathExpression,
  contextNode,
  null,
  XPathResult.ANY_UNORDERED_NODE_TYPE,
  null,
);
return xpathResult;
}