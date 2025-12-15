var browser = browser || chrome

function saveOptions(e) {
  e.preventDefault();
  browser.storage.local.set({
    'settings': {
      video: document.querySelector("#ytVideo").value,
      summary: document.querySelector("#ytSummary").value
    }
  });
}
function restoreOptions() {
  function setCurrentChoice(result) {
    document.querySelector("#ytVideo").value = (result.settings?.video) ? result.settings.video : "hide";
    document.querySelector("#ytSummary").value = (result.settings?.summary) ? result.settings.summary : "hide";
  }
  function onError(error) {
    console.log(`Error: ${error}`);
  }

  browser.storage.local.get('settings').then(setCurrentChoice, onError);
}

document.addEventListener("DOMContentLoaded", restoreOptions);
document.querySelector("#button").addEventListener("click", saveOptions);