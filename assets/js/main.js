/**
 * Resize Sections
 */
$(window).resize(function() {
    $('#height80').css('height', $(window).width() * 0.56).css('max-height', $(window).height() * 0.8);
});
$(window).trigger('resize');


/**
 * open and close mobile nav
 */
var allowScrolling = true;

$( "[name=mobieNavOperator]" ).on( "click", operateNavMenu );

$( ".c-mobile-nav__link" ).on( "click", operateNavMenu );

function operateNavMenu( event ) {
    var action = $(this).attr('data');
    if( action == 'open' ) {
        $('html').addClass('c-page--mobile-nav-open');
        allowScrolling = false;
    } else {
        $('html').removeClass('c-page--mobile-nav-open');
        allowScrolling = true;
    }
}

document.ontouchmove = function (e) {
    if(allowScrolling) {
        // Enable scrolling.
        return true;
    } else {
        // Disable scrolling.
        e.preventDefault();
    }
}
