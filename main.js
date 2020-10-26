/**
 * 
 *  HAMBURGER MENU
 *  mostrare / nascondere il menu principale
 * 
 */

//  VARIABILI
 var iconHamburger = $('.fa-bars');
 var iconHamburgerExit = $('.fa-times');
 var hamburgerMenu = $('.hamburger-menu')

//  OPEN HAMBURGER MENU
iconHamburger.click( function(){
    hamburgerMenu.addClass('active');
})

// CLOSE HAMBURGER MENU
iconHamburgerExit.click( function(){
    hamburgerMenu.removeClass('active');
})



