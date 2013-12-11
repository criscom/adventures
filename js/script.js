/**
 * @file
 * A JavaScript file for the theme.
 *
 * In order for this JavaScript to be loaded on pages, see the instructions in
 * the README.txt next to this file.
 */

// JavaScript should be made compatible with libraries other than jQuery by
// wrapping it with an "anonymous closure". See:
// - https://drupal.org/node/1446420
// - http://www.adequatelygood.com/2010/3/JavaScript-Module-Pattern-In-Depth
// (function ($, Drupal, window, document, undefined) {


// To understand behaviors, see https://drupal.org/node/756722#behaviors
// Drupal.behaviors.my_custom_behavior = {
//   attach: function(context, settings) {

//     // Place your code here.

//   }
// };
(function ($) {  
  $(document).ready(function() {
    // $('#block-menu-block-4').prepend('<div class="menu-icons"></div>');
    // Sponsoren Image Map
    $('img[usemap]').rwdImageMaps();

    // Ergebnis Detailseiten: Menüpunkt Ergebnis aktiv setzen
        $("body.node-type-ergebnisse-verein li.menu-mlid-1022 a").addClass("active-trail").addClass("active");
    // Bildergalerie Übersichtsseite Menüpunkt "VEREIN" aktiv setzen
        $("body.page-verein-stefflhof-bilder li.menu-772 a").addClass("active-trail").addClass("active");
    // Bildergalerie Detailseite Menüpunkt "VEREIN" aktiv setzen
        $("body.node-type-bildergalerie-verein li.menu-772 a").addClass("active-trail").addClass("active");
    // News Detailseite Menüpunkt "VEREIN" aktiv setzen
        $("body.node-type-news-stefflhof-sulmsee li.menu-772 a").addClass("active-trail").addClass("active");




  // $(".menu-block-4").mmenu({
  //  // options object
  //  position: "right",
  //   }, {
  //  // configuration object
  //  //pageNodetype: "section"
  //   });
  // $(".menu-block-4").trigger("open");

  });

})(jQuery);
