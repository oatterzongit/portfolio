// Main

$(document).ready(function(){
  console.log('DOM Ready');

  $('.button-collapse').sideNav({
    menuWidth: 300, // Default is 240
    edge: 'left', // Choose the horizontal origin
    closeOnClick: true // Closes side-nav on <a> clicks, useful for Angular/Meteor
  });

  $('.parallax').parallax();

  $('.slider').slider({full_width: true});

  $('.modal-trigger').leanModal();

});
