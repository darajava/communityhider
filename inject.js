var viewsClasses = '.watch7-views-info, .yt-subscription-button-subscriber-count-branded-horizontal, .yt-subscriber-count, .watch-view-count, .like-button-renderer, .video-extras-sparkbar-likes';
var commentClasses = '#watch-discussion';
var suggestedViewClasses = '.stat.view-count, .ytp-videowall-still-info-author, .yt-lockup-meta-info li';

var viewState, commentState, suggestedViewState;
$(document).ready(function(){
  chrome.storage.sync.get(['views', 'comments', 'suggestedViews'], function(items) {
    console.log('Settings retrieved', items);
    viewState = items.views;
    commentState = items.comments;
    suggestedViewState = items.suggestedViews;
  });
});

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.data == "apply"){
    setTimeout(function(){
      setup(); 
    }, 1500);
  }
});

function setup(){
  $('.like-button-renderer-like-button, .like-button-renderer-dislike-button').click(function(){
    // Show the comments and the likes after rating a video
    if (viewState == "liked") {
      $(viewsClasses).addClass('gwanthenshowforaminute'); 
    }
    if (commentState == "liked") {
      $(commentClasses).addClass('gwanthenshowforaminute'); 
    }
    if (suggestedViewState == "liked") {
      $(suggestedViewClasses).addClass('gwanthenshowforaminute'); 
    }
  });
}

