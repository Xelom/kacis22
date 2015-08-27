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

    $('#fullpage').fullpage({

        // Plugin setup

        // Navigation
        anchors: ['welcome', 'team', 'about', 'contact'],
        menu: '.fullpage__nav',
        slidesNavigation: 'true',

        // Custom selectors
        sectionSelector: '.site-wrapper',
        slideSelector: '.site-wrapper__slide',

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
        }
    });

});
