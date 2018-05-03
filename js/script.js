


$(document).ready(function () {
    $('.open-form').on('click', function () {
        $('.contact-overlay').fadeToggle(600);
    });
});

$(document).ready(function () {
    $('#close-form').on('click', function () {
        $('.contact-overlay').fadeToggle(600);
    });
});

$(function() {

    var controller = new slidebars();
    controller.init();

    $( '.toggle-id-1' ).on( 'click', function ( event ) {
        // Stop default action and bubbling
        event.stopPropagation();
        event.preventDefault();

        // Toggle the Slidebar with id 'id-1'
        controller.toggle( 'id-1' );
        $( '.off-canvas-nav' ).toggleClass( 'active-canvas' );


        $('html').click(function() {
            controller.close( 'id-1' );
            $('.navbar-toggle').removeClass("active");
        });

    } );

});

$(document).ready(function () {
    $(".navbar-toggle").on("click", function () {
        $(this).toggleClass("active");
    });
});

$(document).ready(function () {
    new Typed('#typed', {
        strings: ['I am a Front End Developer.', 'I am a User Interface (UI) Designer.', 'I have a passion for creating simple interfaces.',  'I love building HTML, CSS, and WordPress Websites.'],
        typeSpeed: 40,
        backDelay: 500,
        backSpeed: 30,
        smartBackspace: true,
        showCursor: true,
        startDelay: 1800,
        loop: true
    });
});

$(document).ready(function () {
    $('.grid').masonry({
        itemSelector: '.grid-item',
        columnWidth: '.grid-size'
    });

    lightbox.option({
        'alwaysShowNavOnTouchDevices': true
    })

});

window.addEventListener("load", function(event) {
    lazyload();
});

new AnimOnScroll( document.getElementById( 'grid' ), {
    minDuration : 0.4,
    maxDuration : 0.7,
    viewportFactor : 0.2
} );