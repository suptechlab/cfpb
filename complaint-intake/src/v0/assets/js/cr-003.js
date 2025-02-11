
if ('onhashchange' in window) {

    function show_slide(_id, instant){
        var elm = $('#'+_id);
        var cur = $('.G_ACTIVE');

        if(!elm.length)
            return;

        cur.fadeOut(instant?0:130);
        setTimeout(function(){
            elm.fadeIn(instant?0:400);
            elm.addClass('G_ACTIVE');
        }, instant?0:140);
    }

    $(function(){

        // Remove the styling that is used for browsers
        // that do not support onhashchange.
        $('.g-container').not('.G_ACTIVE')
        .removeClass('l-separated--vertical')
        .removeClass('l-divided--top')
        .hide();

        $('.g-goto').click(function() {
            var href=$(this).attr('href').replace('#','');
            window.location.hash = href;
            return false;
        });

        // Analytics
        var prev_hash_val = location.hash;

        if (window.location.hash) {
            show_slide(window.location.hash.replace('#',''), 1);
            // If you paste a url into the browser with a hash it will jump to that hash.
            // We don't want this behavior, we want the page to behave as normal so you have
            // context from the intro.
            $('html, body').scrollTop($(window.location.hash).offset().top);
        }

        // Create event for back/forward hash tag change
        $(window).bind('hashchange', function(e){
            // Slide
            var slide_id = window.location.hash.replace('#','');
            if (!slide_id)
                slide_id = 'main';
            show_slide(slide_id);
            // Analytics
            if( prev_hash_val != location.hash ) {
                prev_hash_val = location.hash;
                _gaq.push(['_trackPageview', location.pathname + location.search + location.hash]);
            }
        });

    });

} // end if

$(function() {

//Credit & debit card radio button selections display different "Submit Complaint" wells
    $('input[name=radio-ccpp]:radio').change(function() {
        var $selected_radio = $('input[name=radio-ccpp]:radio:checked');
        var selected_id = $selected_radio.attr('id');
        $('#submit-credit-card').hide();

        if (selected_id == 'radio-debit-card') {
            $('#submit-credit-card').show();
            $('#submit-credit-card a').attr('href', 'https://help.consumerfinance.gov/app/bankaccountorservice/ask');
            $('#submit-credit-card h2').html('Submit a bank account or service complaint to the CFPB');
        }
        else if (selected_id == 'radio-prepaid-card') {
            $('#submit-credit-card').show();
            $('#submit-credit-card a').attr('href', 'http://ptrn.herokuapp.com/edit/page-42/view');
            $('#submit-credit-card h2').html('Submit a prepaid card complaint to the CFPB');
        }
        else {
            $('#submit-credit-card').show();
        }
    });

//"Other service" radio button selections display different "Submit Complaint" wells/links
    $('input[name=radio-money]:radio').change(function() {
        var $selected_radio = $('input[name=radio-money]:radio:checked');
        var selected_id = $selected_radio.attr('id');
        $('#submit-money-service,#credit-repair_conditional,#debt-settlement_conditional').hide();

        //Credit repair conditional radio butons
        if (selected_id == 'radio-credit-repair') {
            $('#credit-repair_conditional').fadeIn(500);
            $('input[name=radio-money_conditional]:radio').change(function() {
                var $selected_conditional = $('input[name=radio-money_conditional]:radio:checked');
                var selected_conditional_id = $selected_conditional.attr('id');

                if (selected_conditional_id == 'radio2-credit-report') {
                    $('#submit-money-service a').attr('href', 'https://help.consumerfinance.gov/app/creditreporting/ask');
                    $('#submit-money-service h2').html('Submit a credit reporting complaint to the CFPB');
                }
                else {
                    $('#submit-money-service a').attr('href', 'http://ptrn.herokuapp.com/edit/page-26/view#credit-repair');
                    $('#submit-money-service h2').html('Submit an other financial service complaint to the CFPB');
                }

                $('#submit-money-service').show();
            });
        }
        //Debt settlement conditional radio butons
        else if (selected_id == 'radio-debt-settlement') {
            $('#debt-settlement_conditional').fadeIn(500);
            $('input[name=radio-money_conditional]:radio').change(function() {
                var $selected_conditional = $('input[name=radio-money_conditional]:radio:checked');
                var selected_conditional_id = $selected_conditional.attr('id');

                if (selected_conditional_id == 'radio2-debt-settlement') {
                    $('#submit-money-service a').attr('href', 'http://ptrn.herokuapp.com/edit/page-26/view#debt-settlement');
                    $('#submit-money-service h2').html('Submit an other financial service complaint to the CFPB');
                }
                else {
                    $('#submit-money-service a').attr('href', 'https://help.consumerfinance.gov/app/debtcollection/ask#currentPage=0');
                    $('#submit-money-service h2').html('Submit a debt collection complaint to the CFPB');
                }

                $('#submit-money-service').show();
            });
        }

        else {
            $('#submit-money-service h2').html('Submit an other financial service complaint to the CFPB');
            switch (selected_id)
            {
            case "radio-check-cashing":
                $('#submit-money-service a').attr('href', 'http://ptrn.herokuapp.com/edit/page-26/view#check-cashing');
                break;
            case "radio-foreign-currency-exchange":
                $('#submit-money-service a').attr('href', 'http://ptrn.herokuapp.com/edit/page-26/view#foreign-currency-exchange');
                break;
            case "radio-money-order":
                $('#submit-money-service a').attr('href', 'http://ptrn.herokuapp.com/edit/page-26/view#money-order');
                break;
            case "radio-refund-anticipation-check":
                $('#submit-money-service a').attr('href', 'http://ptrn.herokuapp.com/edit/page-26/view#refund-anticipation-check');
                break;
            case "radio-travelers-check":
                $('#submit-money-service a').attr('href', 'http://ptrn.herokuapp.com/edit/page-26/view#travel');
                break;
            } //close switch
            $('#submit-money-service').show();
        } //close else

    });

// Reset detail views on URL hash change
    $(window).on('hashchange',function(){
        $('input[name=radio-ccpp]:radio,input[name=radio-money]:radio,input[name=radio-money_conditional]:radio').prop('checked', false);
        $('#submit-credit-card,#submit-debit-card,#submit-prepaid-card,#submit-money-service,#credit-repair_conditional,#debt-settlement_conditional').hide();
    });

//---------------MEDIA QUERIES------------------

    function mobileReorder() {
        var slide_id = window.location.hash;

        if ($(window).width() < 480) {
            $(slide_id +'> .span4').prepend($(slide_id +'> .span4 h4'));
            $(slide_id +'> .span8 .well .span4').prepend($(slide_id +'> .span8 .span8'));
            $()
        }
    }

    function mobileColors() {
        var slide_id = window.location.hash;

        if ($(window).width() < 480 && slide_id != '#main') {
            $('.sub-theme-quiet--divided').css('border', 'none');
            $('.cr-theme .sub-theme-quiet').css('background-color', '#FFF');
        }
        else {
            $('.sub-theme-quiet--divided').css('border-bottom', '4px solid #F1F2F2');
            $('.cr-theme .sub-theme-quiet').css('background-color', '#F8F8F8');
        }
    }

    function mobileConditionals() {
        if ($(window).width() < 480) {
            $('input[name=radio-money]:radio').change(function() {
                $('input[name=radio-money]:not(:checked)').parent().addClass('hideConditionals');
                $('input[name=radio-money]:checked').parent().append($('.sub-product-radios #mob-diff-service'));
                $('.sub-product-radios #mob-diff-service').show();

                $('.sub-product-radios #mob-diff-service').click(function() {
                    $('input[name=radio-money]:not(:checked)').parent().removeClass('hideConditionals');
                    $('.sub-product-radios #mob-diff-service').hide();
                });
            });
        }
    }

    mobileReorder();
    mobileConditionals();
    mobileColors();

    //On hashchange, hide certain classes on mobile devices/
    $(window).on('hashchange',function(){
        var slide_id = window.location.hash;

        mobileReorder();
        mobileColors();

        if ($(window).width() < 480 && slide_id != '#main') {
            $('.check-status, .after-complaint, .info-use').hide();
            $('#mob-detail-links').show();
            // console.log(slide_id);
        }
        else {
            $('.check-status, .after-complaint, .info-use').show();
            $('#mob-detail-links').hide();
        }
    });
});
