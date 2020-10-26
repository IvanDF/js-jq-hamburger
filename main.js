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

// /**
//  * SENZA TRASNSIZIONE
//  */

// //  APRI HAMBURGER MENU
// openMenu.click( function(){
//     menu.addClass('active');
// })

// //  CHIUDI HAMBURGER MENU
// closeMenu.click( function(){
//     menu.removeClass('active');
// })


/**
 * CON TRASNSIZIONE
 */
//  APRI HAMBURGER MENU
openMenu.click( function(){
    menu.fadeIn(2000);
})
//  CHIUDI HAMBURGER MENU
closeMenu.click( function(){
    menu.fadeOut(1000);
})


/************************************
 *  JavaScript
 ***********************************/

// //  VARIABILI JS
// var openMenu = document.getElementsByClassName('fa-bars')[0];
// var closeMenu = document.getElementsByClassName('fa-times')[0];
// var menu = document.getElementsByClassName('hamburger-menu')[0];

// // FUNZIONE TOGGLE HAMBURGER MENU
// openMenu.addEventListener('click' , function(){
//     menu.className += ' active';
// })
// closeMenu.addEventListener('click' , function(){
//     menu.className = 'hamburger-menu';
// })