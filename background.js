var link1 = items.yourserver;
var link2 = items.yournickname;

chrome.browserAction.onClicked.addListener(function() {
  chrome.tabs.query({currentWindow: true, active: true}, function(tab) {
    chrome.tabs.create( { "url": "http://"+link1+".op.gg/summoner/userName="+link2 } );
  });
});