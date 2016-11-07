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
