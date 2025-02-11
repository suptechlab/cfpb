(function($) {
    $( document ).ready(function() {
        
        // code for logging tagged Topics & Types -wernerc
        var toptypes = ""; // string for event value
        var ttarray = []; // array for storing values

        // add "Topics" to the array
        $( "input.nav-tag-link" ).each( function(index)  {
            if ( $( this ).is( ":checked" ) ) {
                if (toptypes != "") toptypes = toptypes + ",";
                ttarray.push( $( this ).val() );
            }
        });

        // add "Types" to the array
        $( "input.nav-category-link" ).each( function(index)  {
            if ( $( this ).is( ":checked" ) ) {
                if (toptypes != "") toptypes = toptypes + ",";
                ttarray.push( $( this ).val() );
            }
        });
        ttarray.sort(); // Alphabetize the array so that events are consistent.
        $.each(ttarray, function(index, value) { // Craft the string
            if (toptypes != "") toptypes += ",";
            toptypes += value;
        });

        // gaq.push the event content
        _gaq.push(['_trackEvent', 'topics_and_types', toptypes]);


        $('.rss-link').click(function(){
            var link_text = $(this).text();
            var link_url = $(this).attr('href')
            _gaq.push(['_trackEvent', 'Subscriptions', 'RSS', link_text]);
        });

        $('.signup-link').click(function(){
            var link_text = $(this).text();
            _gaq.push(['_trackEvent', 'Subscriptions', 'Email Signup', link_text ]);
        });
       
        $('.share-facebook').click(function(){
            _gaq.push(['_trackEvent', 'Social', 'Facebook Shares']);
        });
        $('.share-twitter').click(function(){
            _gaq.push(['_trackEvent', 'Social', 'Twitter Shares']);
        });

        $('.share-email').click(function(){
            _gaq.push(['_trackEvent', 'Social', 'Email Shares']);
        });

         $('.follow-us').click(function(){
            var link_url = $(this).attr('href')
            _gaq.push(['_trackEvent', 'Social', 'Follow, link_url']);
        });

        $(".internal-link").click(function(){
            var link_text = $(this).text();
            var link_url = $(this).attr('href')
            _gaq.push(['_trackEvent', 'Internal Link', link_text, link_url]);
        });

        $('.page-numbers').click(function(){
            var link_text = $(this).text();
            _gaq.push(['_trackEvent', 'Pagination', 'Pagination', link_text]);
        });

        $('.images-link').click(function(){
            var link_url = $(this).attr('href')
            _gaq.push(['_trackEvent', 'Images Link', 'Images Link', link_url]);
        });

    });
}(jQuery));
