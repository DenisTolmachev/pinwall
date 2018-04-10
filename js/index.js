$(document).ready(function(){
    $("div").children('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        dots:true,
        responsive:{
            0:{
                items:1
            },
            700:{
                items:1
            },
            800:{
                items:1
            },
            1000:{
                items:1
            }
        }
    })
});

jQuery(document).ready(function() {
    jQuery('.toggle-nav').click(function(e) {
        jQuery(this).toggleClass('active');
        jQuery('.top_menu').toggleClass('active');

        e.preventDefault();
    });
});

jQuery(document).ready(function() {
    jQuery('.toggle-cont').click(function(e) {
        jQuery(this).toggleClass('active');
        jQuery('.contacts').toggleClass('active');

        e.preventDefault();
    });
});