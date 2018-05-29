$(document).ready(function () {

    $('#form').submit(function (event){
        event.preventDefault();
        var $searchField = $('#searchfield');
        var $submitButton = $('#submitbtn');

        $searchField.prop("disabled", true);
        $submitButton.attr("disabled", true).val("Searching...");
        //AJAX
        var flickrAPI = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
        var animal = $searchField.val();
        var flickrOptions = {
            tags: animal,
            format: "json"
        };
        function displayPhotos(data){
            var photoHTML = '<ul class="list-unstyled row">';
            $.each(data.items, function(i, photo){
                photoHTML += '<li class="mb-1 col-md-4 col-sm-6 col-lg-3">';
                photoHTML += '<a href="' + photo.link + '">';
                photoHTML += '<img src="' + photo.media.m + '" class="img-thumbnail photo"></a></li>';
            });
            photoHTML += '</ul>';
            $('#photo').html(photoHTML);
            $searchField.prop("disabled", false);
            $submitButton.attr("disabled", false).val("Search");
        }
        $.getJSON(flickrAPI, flickrOptions, displayPhotos);
    });
    
    

}); // end ready