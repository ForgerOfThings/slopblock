let getting = browser.storage.local.get("desire");
getting.then(afterGet, onError)

function afterGet(result) {
  console.log(result.desire)
  if (!result.desire) {
    browser.storage.local.set({
      desire: "delete",
    });
  }
}
function onError(error) {
  console.log(`Error: ${error}`);
}