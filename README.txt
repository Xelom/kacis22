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


Wolfram :: Multipurpose One Page Template



GENERAL INFO
============

Wolfram is a creative one page template professionally handcrafted to meet the needs of novice developers and experts alike. You don't need to have any special knowledge to set it up and adjust for your needs. 

Built with Twitter Bootstrap, it combines all of its great features with our clean user-friendly layout. Fully responsive, it looks perfect on all major browsers, tablets and phones. 

Advanced customizability and attention to details will help you get your own website up and running in no time. Feel free to visit the preview page or contact us if you have any questions.


Key features
------------

 - Fully responsive design
 - Built with LESS
 - 2 menu types (fixed top and sidebar menu)
 - 6 layout options (NEW!)
 - 5 predefined color schemes
 - Functioning PHP contact form with spam protection (powered by reCaptcha)

Current release is v2.2.0. Buying this template now you become eligible to free download all of its future updates. Please contact us for more info.



INSTRUCTIONS
============

Changing a color scheme
-----------------------

Wolfram comes with 6 built-in color schemes. For each color scheme there is a separate 'style_color.css' file located in the /css folder (e.g. 'styles_green.css').  In order to activate a different color scheme you need to change the name of its styles file to 'style.css' (e.g. rename 'styles_green.css' to 'style.css').  All templates will then use this file as a default stylesheet.


Creating a custom color scheme
------------------------------

You can easily create your own color scheme with LESS files included. All color values are stored in the /less/colors.less file. In order to change a color scheme you need to open this file and change the value of the '@primary-base' variable to any other color you prefer. After necessary changes are done you need to recompile the /less/style.less file to /css/styles.css to enable a new color scheme.


Changing menu type
-------------------

The following menu types are available: 

 - Top navbar menu
 - Sidebar menu

The default menu type is "Top navbar menu". If you want to switch to the "Sidebar menu", please follow the steps below: 

1. Open your /index_*.html file and add the '.hidden' class to the '.navbar' container.
2. Remove the '.hidden' class from the '.sidebar-btn' container.
3. Save the file and reload your page.


Setting up the Contact Form
---------------------------

This template contains a fully functioning PHP contact form with spam protection powered by reCaptcha. 

Note: The contact form will not work in your local environment without a server that supports PHP. 

In order to set up the contact form, please follow the steps below: 

1. Open the /config.php file and fill out the required information: 

 - reCaptcha Public ($publickey) and Private ($privatekey) keys.
 These keys are required to make your reCaptcha work properly. Please go to https://www.google.com/recaptcha/admin/create if you don't have the keys yet.

 - Sender name and email address ($mail_sender)
 This is a name and email address you will see in the 'From:' line of new emails you will receive.

 - Your email address ($to_email)
 This is an email address new emails will be sent to.

 - Email subject ($mail_subject)
 This is a subject of new emails you will receive.

2. Open your /index_*.html file and insert your reCaptcha Public key (see Step 1) at the end of these lines (2 entries): 

http://www.google.com/recaptcha/api/challenge?k=YOUR_PUBLIC_KEY

(e.g. http://www.google.com/recaptcha/api/challenge?k=09sdv0sf9v0sdf9b0df9b09dfb).

3. Save both files.


Adding/removing 'screens'
-------------------------

Please follow the steps below to add/remove 'screens' from the original template:

1) index_crossfading.html, index_crossfading_*.html:

    1. Add/remove necessary html code from your 'index_*.html'.
    2. Open 'js/custom_crossfading.js' and add/remove corresponding Backstretch images and
    fullPage anchors:

    ```

    $(".backstretch-carousel").backstretch([
        "img/screen-bg_1.jpg",
        "img/screen-bg_2.jpg",
        "img/screen-bg_3.jpg",   
        "img/screen-bg_4.jpg",   
        "img/screen-bg_5.jpg",   
        "img/screen-bg_6.jpg", 
        "img/screen-bg_7.jpg" 
    ], {duration: 1000, fade: 700});

    anchors: ['welcome', 'about', 'portfolio', 'pricing', 'team', 'features', 'contact'],

    ```

    Please mind the order of the images and anchors, e.g. 'welcome' screen corresponds to 'img/screen-bg_1.jpg', etc.

    3. Open your 'index_*.html' and correct links in the navbar or sidebar, depending on what you use.


2) index_sliding.html, index_sliding_*.html:
    
    1. Add/remove necessary html code from your 'index_*.html'.
    2. Correct links in the navbar or sidebar, depending on what you use.
    3. If you add a new section, set up its background image in '/css/style.css' or /less/style.less' (if you work with LESS) in the #SLIDING BACKGROUND IMAGE section.


Changing background images
--------------------------

There are two ways to change the background image for any separate 'screen':

1. Replace the original background image in the '/img' folder with your custom image leaving the original name intact (e.g. screen-bg_1).

2. For index_crossfading.html, index_crossfading_*.html: upload your custom image in the '/img' folder and change a path to it in  '/js/custom_crossfading.js' in this part: 

```

$(".backstretch-carousel").backstretch([
    "img/screen-bg_1.jpg",
    "img/screen-bg_2.jpg",
    "img/screen-bg_3.jpg",   
    "img/screen-bg_4.jpg",   
    "img/screen-bg_5.jpg",   
    "img/screen-bg_6.jpg", 
    "img/screen-bg_7.jpg" 
], {duration: 1000, fade: 700});

```
3. For index_sliding.html, index_sliding_*.html: upload your custom image in the '/img' folder and change a path to it in '/css/style.css' or /less/style.less' (if you work with LESS) in the #SLIDING BACKGROUND IMAGE section.



Sources and Credits
===================

We've used the following third party images, icons, and other files listed:


General
-------

1. Twitter Bootstrap

URL: 		http://getbootstrap.com/
AUTHOR: 	@mdo and @fat
LICENSE:	MIT License

2. Font Awesome

URL: 		http://fontawesome.io/
AUTHOR: 	Dave Gandy
LICENSE: 	MIT license

3. Open Iconic

URL: 		https://useiconic.com/open/
AUTHOR:		Waybury
LICENSE:	MIT license


CSS Files
---------

1. CSS Animation

URL: 		https://daneden.me/animate/
AUTHOR: 	Dan Eden
LICENSE: 	MIT license


JS Plugins
----------

1. Lightbox 

URL: 		http://lokeshdhakar.com/projects/lightbox2/
AUTHOR: 	Lokesh Dhakar
LICENSE: 	Creative Commons Attribution 2.5 License

2. jQuery Backstretch

URL: 		http://srobbin.com/jquery-plugins/backstretch/
AUTHOR: 	Scott Robbin
LICENSE: 	MIT license

3. fullPage.js

URL:		http://alvarotrigo.com/fullPage/
AUTHOR: 	Alvaro Trigo
LICENSE: 	MIT License

4. Slimscroll

URL:		http://rocha.la/jQuery-slimScroll
AUTHOR:		Piotr Rochala
LICENSE:	MIT License

5. Isotope

URL:        http://isotope.metafizzy.co/
AUTHOR:     David DeSandro
LICENSE:    Commercial Developer Lisence (licenses/isotope_commercial_developer_license.pdf)

6. Imagesloaded

URL:        http://imagesloaded.desandro.com/
AUTHOR:     https://github.com/desandro/imagesloaded/graphs/contributors
LICENSE:    MIT license

7. Morphext

URL:        http://morphext.fyianlai.com/
AUTHOR:     Ian Lai
LICENSE:    MIT license

8. Waypoints

URL:        http://imakewebthings.com/jquery-waypoints/
AUTHOR:     I Make Web Things
LICENSE:    MIT license

9. Smoothscroll

URL:        https://github.com/galambalazs/smoothscroll
AUTHOR:     Balazs Galambosi, Patrick Brunner, Michael Herf
LICENSE:    MIT license


reCAPTCHA
---------

Copyright (c) 2007 reCAPTCHA -- http://recaptcha.net

AUTHORS: Mike Crawford
         Ben Maurer


Images
------

**Portfolio:**

All images below are licensed under the **Creative Commons Zero** license (http://unsplash.com/legal-stuff):

1. 	Author: Rob Potvin

	URL: http://38.media.tumblr.com/2741d3e79ea3782f87c65c1e44b5f9fa/tumblr_na0kb0BLqR1st5lhmo1_1280.jpg
	
2. 	Author: Daniel Robert P

	URL: http://38.media.tumblr.com/2c1a9d53169f1eca25b2a0b8238744c9/tumblr_n9hxdqatsK1st5lhmo1_1280.jpg
	
3. 	Author: Andrew Ruiz

	URL: http://38.media.tumblr.com/ce044b7c552a59beeb778b38bc527a65/tumblr_n7yhe1sTa41st5lhmo1_1280.jpg
	
4. 	Author: David Marcu

	URL: http://38.media.tumblr.com/a0bcc39d4e7412072d08e085e888e682/tumblr_nb1up3J7l01st5lhmo1_1280.jpg
	
5. 	Author: Kim Daniel Arthur

	URL: http://38.media.tumblr.com/b028cf062bce5218fc3cbab26d345038/tumblr_n7fg8ypVQI1st5lhmo1_1280.jpg
	
6. 	Author: Matthew Wiebe

	URL: http://33.media.tumblr.com/a0d6500fa274340eca0eb0c125c18228/tumblr_n4cmkfHsMO1st5lhmo1_1280.jpg


**Photoes**

URL: https://www.flickr.com/photos/ter-burg/page40/
AUTHOR: Sebastiaan ter Burg
LICENSE: CC BY 2.0


**Backgrounds**

URL:		http://thestocks.im/
LICENSE: 	Creative Commons Zero


**Preloader image**

URL:        http://preloaders.net/
LICENSE:    http://preloaders.net/en/terms_of_use


The rest of the files that are not listed above are created by the Simpleqode.com team and are free to use by this package owner.



Changelog
=========

Version 2.2.0 - 30/04/2015

 - Add classic layout
 - Add Waypoints plugin
 - Add Smoothscroll plugin
 - other small changes

Version 2.1.0 - 10/04/2015

 - Add 4 new template layouts:

  - Sliding background images: Default.
  - Sliding background images: Slideshow.
  - Sliding background images: Text rotator.
  - Crossfading background images: Text rotator.

 - Add Morphext text rotator plugin.
 - Darken navbar and sidebar backgrounds on extra small devices.
 - Add extra top margin to headings on extra small devices.
 - Other small changes.

Version 2.2.0 - 02/04/2015

 - Update Bootstrap to v3.3.4.
 - Update FontAwesome to 4.3.0.
 - Update Lightbox to v2.7.1.
 - Update jQuery to v1.11.2.
 - Add fullPage.js plugin.
 - Add Isotope plugin.
 - Add Imagesloaded plugin.
 - Add Open Iconic icons.
 - Replace Roboto font with PT Sans.
 - Replace controls in Lightbox plugin.
 - Replace background images.
 - Improve general look of the template (navbar, sidebar, preloader, buttons, etc.)
 - Remove additional navbar styles.
 - Remove additional background patterns.
 - Other small changes.

Version 1.1 - 10/10/2014

 - NEW: PHP contact form added
 - IMPROVED: New preloader added
 - IMPROVED: Small bugs corrected

Version 1.0 - 18/08/2014

 - Initial release



Thanks for purchasing the Wolfram template. Do not hesitate to contact us if you have any questions or suggestions regarding this item.

https://twitter.com/YevSim
http://simpleqode.com/
yevgenysim@yandex.ru