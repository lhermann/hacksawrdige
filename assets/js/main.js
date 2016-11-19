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

// Enable/Disable Scrolling in iPhone/iPad’s Safari
document.ontouchmove = function (e) {
    if(allowScrolling) {
        // Enable scrolling.
        return true;
    } else {
        // Disable scrolling.
        e.preventDefault();
    }
}


/**
 * Reveal Order Form
 */

$("#showBook1Form").on("click", function(event){
    $(this).hide();
    $("#book1Form").fadeIn();
});


/**
 * Calculate price of total order
 * Book 1:
 */
var pricing = [
    [1, 7.95],
    [10, 3.00],
    [50, 2.00],
    [100, 1.50],
    [500, 1.25],
    [1000, 1.00]
];
var book1Price = $('#book1Price');
var book1PriceInput = $('#book1PriceInput');

$('#book1AmountInput').on('input', function() {
    var price = pricing[0][1];
    var amount = $(this).val();
    for (var i =  0; i < pricing.length; i++) {
        if( amount < pricing[i][0] ) {
            break;
        }
        price = pricing[i][1];
    }
    var total = roundTwoDec( amount * price );
    book1Price.text( total + " EUR" );
    book1PriceInput.val( total );
});

function roundTwoDec(num) {
    num =  Math.round(num * 100) / 100;
    return num.toFixed(2).replace('.', ',');
}


