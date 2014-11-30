var nickname = "master94ga";

chrome.browserAction.onClicked.addListener(function() {
  chrome.tabs.query({currentWindow: true, active: true}, function(tab) {
    chrome.tabs.create( { "url": "http://euw.op.gg/summoner/userName=" +nickname } );
  });
});