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

var valueList = ['.values-section__value--icon-impact', '.values-section__value--icon-collaboration', '.values-section__value--icon-responsibility', '.values-section__value--icon-diversity', '.values-section__value--icon-efficiency', '.values-section__value--icon-innovation', '.values-section__value--icon-engagement', '.values-section__value--icon-sustainability',];
var mantis = "#81C36C";
var oceanGreen = "#3FAB6D";
var gulfStream = "#84C3BB";
var mantisTint = "#C6E4BD";
var oceanGreenTint =  "#A8D9BD";
var gulfStreamTint = "#C8E4E0";

var currVal = 0;
$(document).ready(function () {
  window.setInterval(function() {
    changeIcon(currVal);
    currVal++;
  }, 2000);
})

function changeIcon(x) {
  if (x < valueList.length) {
    var val = valueList[x];
    if (x == 0 || x == 5 || x == 7) {
      $(val).css('background-color', mantis);
    }
    else if (x == 1 || x == 3 || x == 6) {
      $(val).css('background-color', oceanGreen);
    }
    else {
      $(val).css('background-color', gulfStream);
    }
  }
  else {
    currVal = 0;
  }
}

// =================================================================================
// Making cover image change with delay
// $(function() {
//   var headerImage = $('.photo-strip--showcase');
//   var backgrounds = ['url(/images/photostrips/ps1.jpg)', 'url(/images/photostrips/ps4.jpg)', 'url(/images/photostrips/ps3.jpg)'];
//   var current = 0;

//   function nextBackground() {
//     headerImage.fadeOut(500, function() {
//       headerImage.css('background-image', backgrounds[current = ++current % backgrounds.length]).fadeIn(1000);
//       headerImage.css('background-attachment', 'fixed');
//       headerImage.css('background-postion', 'center center');
//       headerImage.css('background-size', 'cover');
//       setTimeout(nextBackground, 4000);
//     })
//   }

//   setTimeout(nextBackground, 4000);
//   headerImage.css('background-image', backgrounds[0])

// });