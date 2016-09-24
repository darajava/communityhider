$(document).ready(setup);

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  setTimeout(function(){
    setup(); 
  }, 1500);
});



function setup(){
  $('.like-button-renderer-like-button, .like-button-renderer-dislike-button').click(function(){
    // Show the comments and the likes after rating a video
    $('.yt-subscription-button-subscriber-count-branded-horizontal, #watch-discussion, .watch-view-count, .like-button-renderer, .video-extras-sparkbar-likes').addClass('gwanthenshowforaminute'); 
  });
}

