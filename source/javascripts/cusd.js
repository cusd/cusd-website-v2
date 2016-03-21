//= require jquery/dist/jquery.js
//= require Snap.svg/dist/snap.svg.js

var roles = ['architects','designers','engineers','strategists'],
    s = Snap('#teamGraphic'),
    i = 0;

var animateTeamGraphic = function(fromId, toId, duration) {
  s.select(toId).animate({fill: '#3F9B8F'}, duration);
  s.select(fromId).animate({fill: '#81C36C'}, duration);
};

var animateRoleText = function(newText) {
  $('#roleLabel').animate({opacity:0}, 750, function() {
    $(this).text(newText).animate({opacity:1}, 750);
  });
};

var switchRole = function() {
  var fromRole = roles[i],
      toRole = roles[(++i % roles.length)];
      
  i = i % roles.length;
  animateRoleText(toRole.slice(0,1).toUpperCase() + toRole.slice(1));
  animateTeamGraphic('#' + fromRole, '#' + toRole, 1000);
};

$(document).ready(function(){
  if ($("body.index").length === 1) {
    window.setTimeout(function() {
      switchRole();
      window.setInterval(switchRole, 4000);
    }, 1000);
  }
});

function mobileMenu(){
  console.log($('.site-header').height());
  if ($('.site-header').height() < 120){
    $('.site-header').animate({height: "146px"}, 300);
  }
  else {
    $('.site-header').animate({height: "88px"}, 300);
  }
}

$(function() {
  var headerImage = $('.photo-strip--showcase');
  var backgrounds = ['url(/images/photostrips/ps1.jpg)', 'url(/images/photostrips/ps4.jpg)', 'url(/images/photostrips/ps3.jpg)'];
  var current = 0;

  function nextBackground() {
    headerImage.fadeOut(600, function() {
      headerImage.css('background-image', backgrounds[current = ++current % backgrounds.length]).fadeIn(800);
      headerImage.css('background-attachment', 'fixed');
      headerImage.css('background-postion', 'center center');
      headerImage.css('background-size', 'cover');
      setTimeout(nextBackground, 4000);
    })
  }

  setTimeout(nextBackground, 4000);
  headerImage.css('background-image', backgrounds[0])

});