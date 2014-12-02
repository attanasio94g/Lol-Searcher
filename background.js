var nickname = localStorage.getItem("key1");

chrome.browserAction.onClicked.addListener(function() {
  chrome.tabs.query({currentWindow: true, active: true}, function(tab) {
    chrome.tabs.create( { "url": "http://euw.op.gg/summoner/userName=" +nickname } );
  });
});