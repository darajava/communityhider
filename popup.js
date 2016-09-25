window.addEventListener("load", function() {
    $('#disable').change(function(){
      console.log($(this).val());
    });
    
    $('input[name=views-group]').change(function() {
      chrome.storage.sync.set({'views': $(this).val()}, function() {
        console.log('Settings saved');
      });
    });

    $('input[name=comments-group]').change(function(){
      chrome.storage.sync.set({'comments': $(this).val()}, function() {
        console.log('Settings saved');
      });
    });

    $('input[name=suggested-views-group]').change(function(){
      chrome.storage.sync.set({'suggestedViews': $(this).val()}, function() {
        console.log('Settings saved');
      });
    });

    chrome.storage.sync.get(['views', 'comments', 'suggestedViews'], function(items) { 
      $('input:radio[name="views-group"]').filter('[value="' + items.views + '"]').attr('checked', true);
      $('input:radio[name="comments-group"]').filter('[value="' + items.comments + '"]').attr('checked', true);
      $('input:radio[name="suggested-views-group"]').filter('[value="' + items.suggestedViews + '"]').attr('checked', true);
    });
});

