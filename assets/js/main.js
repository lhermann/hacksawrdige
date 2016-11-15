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

$( "[name=mobieNavOperator]" ).on( "click", operateNavMenu );

$( ".c-mobile-nav__link" ).on( "click", operateNavMenu );

function operateNavMenu( event ) {
    var action = $(this).attr('data');
    if( action == 'open' ) {
        $('html').addClass('c-page--mobile-nav-open')
    } else {
        $('html').removeClass('c-page--mobile-nav-open')
    }
}
