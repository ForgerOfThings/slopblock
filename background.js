var browser = browser || chrome
browser.storage.local.get('settings').then(afterGet)
function afterGet(result){
    var tempSettings = {};
    //sets default settings values
    tempSettings.video = (result.settings?.video) ? result.settings.video : "hide";
    tempSettings.summary = (result.settings?.summary) ? result.settings.summary : "hide";
    browser.storage.local.set({
    'settings': tempSettings
});
    console.log(result)
}