//Listen for when a Tab changes state
chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab){
  if(changeInfo && changeInfo.status == "complete") {
    chrome.tabs.sendMessage(tabId, {data: 'apply'}, function(response) {
    });
  }
});

setViews = function(setting) {
  localStorage['views'] = setting;
};
setComments = function(setting) {
  localStorage['comments'] = setting;
};
setSuggestedViews = function(setting) {
  localStorage['suggestedViews'] = setting;
};

getViews = function() {
  return localStorage['views'];
};
getComments = function() {
  return localStorage['comments'];
};
getSuggestedViews = function() {
  return localStorage['suggestedViews'];
};

