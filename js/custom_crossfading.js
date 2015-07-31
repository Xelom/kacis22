/*------------------------------------------------------------------
Project:        Wolfram
Author:         Yevgeny Simzikov
URL:            http://simpleqode.com/
                https://twitter.com/YevSim
                https://www.facebook.com/simpleqode
Version:        2.2.0
Created:        18/08/2014
Last change:    30/04/2015
-------------------------------------------------------------------*/

/* -------------------- *\
    #BACKSTRETCH CAROUSEL & FULLPAGE.JS
\* -------------------- */

$(window).load(function() {

    // Init Backstretch

    $(".backstretch-carousel").backstretch([
        "img/screen-bg_1.jpg",
        "img/screen-bg_2.jpg",
        "img/screen-bg_3.jpg",   
        "img/screen-bg_4.jpg",   
        "img/screen-bg_5.jpg",   
        "img/screen-bg_6.jpg", 
        "img/screen-bg_7.jpg" 
    ], {duration: 1000, fade: 700});

    // Pause Backstretch

    $(".backstretch-carousel").backstretch("pause");

    $('#fullpage').fullpage({

        // Plugin setup
        
        // Navigation
        anchors: ['welcome', 'about', 'portfolio', 'pricing', 'team', 'features', 'contact'],
        menu: '.fullpage__nav',

        // Custom selectors
        sectionSelector: '.site-wrapper',

        //Scrolling
        scrollOverflow: true,

        onLeave: function(index, nextIndex, direction){

            // Make navbar active after leaving 1st section

            if(index == 1 && nextIndex != 1){
                $(".navbar").toggleClass("navbar__initial");
            }

            if(index != 1 && nextIndex == 1){
                $(".navbar").toggleClass("navbar__initial");
            }

            // Change Backstretch image on fullPage scroll

            $(".backstretch-carousel").backstretch("show", nextIndex-1)
        }
    });

});