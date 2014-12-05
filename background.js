var link1;
var link2;

//Go to settings on first installation
chrome.runtime.onInstalled.addListener(function() {
  chrome.tabs.query({currentWindow: true, active: true}, function(tab) {
    chrome.tabs.create( { "url": "settings.html" } );
  });
});

//Load value from storage at start of browser
chrome.runtime.onStartup.addListener(function(){
   chrome.storage.sync.get({
    yourserver: null,
    yournickname: null
  }, function(items) {
    link1 = items.yourserver;
    link2 = items.yournickname;
  });
});

//Load value from storage on click of icon
chrome.browserAction.onClicked.addListener(function(){
   chrome.storage.sync.get({
    yourserver: null,
    yournickname: null
  }, function(items) {
    link1 = items.yourserver;
    link2 = items.yournickname;
  });
});

//Go to op.gg on click of icon
chrome.browserAction.onClicked.addListener(function() {
  chrome.tabs.query({currentWindow: true, active: true}, function(tab) {
    chrome.tabs.create( { "url": "http://"+link1+".op.gg/summoner/userName="+link2 } );
  });
});