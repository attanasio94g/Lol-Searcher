var link1;
var link2;

chrome.runtime.onStartup.addListener(function(){
   chrome.storage.sync.get({
    yourserver: 'kr',
    yournickname: null
  }, function(items) {
    link1 = items.yourserver;
    link2 = items.yournickname;
  });
});

chrome.browserAction.onClicked.addListener(function(){
   chrome.storage.sync.get({
    yourserver: 'kr',
    yournickname: null
  }, function(items) {
    link1 = items.yourserver;
    link2 = items.yournickname;
  });
});

chrome.browserAction.onClicked.addListener(function() {
  chrome.tabs.query({currentWindow: true, active: true}, function(tab) {
    chrome.tabs.create( { "url": "http://"+link1+".op.gg/summoner/userName="+link2 } );
  });
});