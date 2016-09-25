chrome.runtime.onInstalled.addListener(function(details){
  if (details.reason == "install") {
    chrome.storage.sync.set({'suggestedViews': 'hide', 'views': 'liked', 'comments': 'hide'}, function() {
      console.log('Settings saved');
    });
  }
});

//Listen for when a Tab changes state
chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab){
  if(changeInfo && changeInfo.status == "complete") {
    chrome.tabs.sendMessage(tabId, {data: 'apply'}, function(response) {
    });
  }
});
