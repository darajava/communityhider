window.addEventListener("load", function() {
    $('#disable').change(function(){
      console.log($(this).val());
    });
    
    var BGPage = chrome.extension.getBackgroundPage();

    $('input[name=views-group]').change(function() {
      BGPage.setViews($(this).val());
    });

    $('input[name=comments-group]').change(function(){
      BGPage.setComments($(this).val());
    });

    $('input[name=suggested-views-group]').change(function(){
      BGPage.setSuggestedViews($(this).val());
    });

    $('input:radio[name="views-group"]').filter('[value="' + BGPage.getViews() + '"]').attr('checked', true);
    $('input:radio[name="comments-group"]').filter('[value="' + BGPage.getComments() + '"]').attr('checked', true);
    $('input:radio[name="suggested-views-group"]').filter('[value="' + BGPage.getSuggestedViews() + '"]').attr('checked', true);
});

