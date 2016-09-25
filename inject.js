$(document).ready(setup);

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.data == "apply"){
    setTimeout(function(){
      setup(); 
    }, 1500);
  } else if (request.data == "disable") {
  } else if (request.data == "views") {
    console.log(request.value);
  } else if (request.data == "comments") {
  } else if (request.data == "suggested-views") {
  }
});



function setup(){
  $('.like-button-renderer-like-button, .like-button-renderer-dislike-button').click(function(){
    // Show the comments and the likes after rating a video
    $('.yt-subscription-button-subscriber-count-branded-horizontal, #watch-discussion, .watch-view-count, .like-button-renderer, .video-extras-sparkbar-likes').addClass('gwanthenshowforaminute'); 
  });
}

