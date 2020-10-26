/**
 * 
 *  HAMBURGER MENU
 *  mostrare / nascondere il menu principale
 * 
 */


/************************************
 *  jQuery
 ***********************************/

//  VARIABILI jQuery
 var openMenu = $('.fa-bars');
var closeMenu =  $('.fa-times');
var menu = $('.hamburger-menu')

/**
 * SENZA TRASNSIZIONE
 */

//  APRI HAMBURGER MENU
openMenu.click( function(){
    menu.addClass('active');
})

//  CHIUDI HAMBURGER MENU
closeMenu.click( function(){
    menu.removeClass('active');
})


// /**
//  * CON TRASNSIZIONE
//  */
// //  APRI HAMBURGER MENU
// openMenu.click( function(){
//     menu.fadeIn();
// })
// //  CHIUDI HAMBURGER MENU
// closeMenu.click( function(){
//     menu.fadeOut();
// })





/************************************
 *  JavaScript
 ***********************************/

// //  VARIABILI JS
// var openMenu = document.getElementsByClassName('fa-bars');
// var closeMenu = document.getElementsByClassName('fa-times');
// var menu = document.getElementsByClassName('hamburger-menu');

// // FUNZIONE TOGGLE HAMBURGER MENU
// openMenu[0].addEventListener('click' , function(){
//     menu[0].className += ' active';
// })
// closeMenu[0].addEventListener('click' , function(){
//     menu[0].className = 'hamburger-menu';
// })