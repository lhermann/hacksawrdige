/**
 * Reveal Order Form
 */

$("#showBook1Form").on("click", function(event){
    $(this).hide();
    $("#book1Form").fadeIn();
});


/**
 * Calculate price and shipping of total order
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
var book1Weight = 220;
// [gram, cost]
var shipping = [
    [0, 1.00],
    [510, 3.95],
    [1001, 4.50],
    [3001, 5.30],
    [5001, 6.20],
    [10001, 8.50],
    [20001, 9.80],
    [31501, 15.50],
    [36501, 19.60],
    [63001, 29.90],
    [94501, 39.50]
];

var book1Price = $('#book1Price');
var book1Shipping = $('#book1Shipping');
var book1PriceInput = $('#book1PriceInput');
var book1ShippingInput = $('#book1ShippingInput');
var book1TotalInput = $('#book1TotalInput');

$('#book1AmountInput').on('input', function() {
    var bookCost = pricing[0][1];
    var shippingCost = shipping[0][1];
    var amount = $(this).val();
    var weight = amount * book1Weight;
    for (var i =  0; i < pricing.length; i++) {
        if( amount < pricing[i][0] ) {
            break;
        }
        bookCost = pricing[i][1];
    }
    for (var i =  0; i < shipping.length; i++) {
        if( weight < shipping[i][0] ) {
            break;
        }
        shippingCost = shipping[i][1];
    }
    var books = amount * bookCost;
    book1Price.text( roundTwoDec( books ) + " EUR" );
    book1Shipping.text( roundTwoDec( shippingCost ) + " EUR" );
    book1PriceInput.val( roundTwoDec( books ) );
    book1ShippingInput.val( roundTwoDec( shippingCost ) );
    book1TotalInput.val( roundTwoDec( books + shippingCost ) );
});


function roundTwoDec(num) {
    num =  Math.round(num * 100) / 100;
    return num.toFixed(2).replace('.', ',');
}

/**
 * Reset invalid form field styles on typing
 */
if(typeof validator !== 'undefined') {
    $('#book1Form').find('input').on('input', function() {
        $(this).removeClass('c-form__invalid');
    });
}
