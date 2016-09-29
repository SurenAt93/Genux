/*
 * requestAnimationFrame pollyfill
 */
if (!window.requestAnimationFrame) {
  window.requestAnimationFrame = (window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.msRequestAnimationFrame || window.oRequestAnimationFrame || function (callback) {
    return window.setTimeout(callback, 1000 / 60);
  });
}

// if document ready -> run animation only notMobile devices
$(document).ready(function(){
    
  var onMobile = false;
  if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) { onMobile = true; }
  
  if( ( onMobile === false ) ) {
      
    // Init render
    var animationFlag;
    var myConstellation = new Constellation($('canvas')[0]);
    myConstellation.init();
    animationFlag = true;

    // mousemove
    $(window).on('mousemove', function(e) {
      if (e.pageX < 950) {
        myConstellation.clearRect();
        myConstellation.clearStars();
        window.cancelAnimationFrame(myConstellation.requestID);
        animationFlag = false;
      } else {
        if (!animationFlag) {
          myConstellation.init();
          animationFlag = true;  
        }
        myConstellation.createStars();
        $('#tet').css('left', e.pageX - 1100); 
        $('#tet').css('top',  e.pageY - 150);
      }
    });
      
  } else {}
    
});

function Constellation (canvas, options) {
  var $canvas = $(canvas);
  var context = canvas.getContext('2d');
  var ctx     = canvas.getContext('2d');

  var config = {
    star: {
      color: 'rgba(255, 0, 255, .5)',
      width: 5
    },
    line: {
      color: 'rgba(0, 255, 0, .5)',
      width: 0.4
    },
    width: 450,
    height: 450,
    velocity: 1,
    velocityK: 2,
    velocityDef: 1,
    velocityKDef: 2,
    length: 42,
    distance: 50,
    radius: 150,
    stars: []
  };
    
  function Star() {
    // it is a start position x
    this.x  = Math.random() * canvas.width;
    // it is a start position y
    this.y  = Math.random() * canvas.height;
    // it is a star speed on x
    this.vx = (config.velocity - (Math.random() * config.velocityK));
    // it is a star speed on y
    this.vy = (config.velocity - (Math.random() * config.velocityK));
    // it is start radius
    this.radius = Math.random() * config.star.width;
  }

  Star.prototype = {
    create: function(){
      context.beginPath();
      context.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
      context.fill();
    },

    animate: function(){
      var i;
      for (i = 0; i < config.length; i++) {

        var star = config.stars[i];

        if (star.y < 0 || star.y > canvas.height - 35) {
          star.vx = star.vx; // delete ?
          star.vy = - star.vy;
        } else if (star.x < 0 || star.x > canvas.width - 35) {
          star.vx = - star.vx;
          star.vy = star.vy; // delete ?
        }

        star.x += star.vx;
        star.y += star.vy;
      }
    },

    line: function(){
      var length = config.length,
        iStar,
        jStar,
        i,
        j;

      for (i = 0; i < length; i++) {
        for (j = 0; j < length; j++) {
          iStar = config.stars[i];
          jStar = config.stars[j];

          if (
            (iStar.x - jStar.x) < config.distance &&
            (iStar.y - jStar.y) < config.distance &&
            (iStar.x - jStar.x) > - config.distance &&
            (iStar.y - jStar.y) > - config.distance
          ) {
              context.beginPath();
              context.moveTo(iStar.x, iStar.y);
              context.lineTo(jStar.x, jStar.y);
              context.stroke();
              context.closePath();
          }
        }
      }
    }
  };

  this.clearRect = function() {
    context.clearRect(0, 0, canvas.width, canvas.height);
  };

  this.clearStars = function() {
    config.stars = [];  
  };

  this.createStars = function () {
    var length = config.length,
      star,
      i;

    for (i = 0; i < length; i++) {
      if (config.stars.length < length ) {
        config.stars.push(new Star());
      }
      star = config.stars[i];

      star.create();
    }

    star.line();
    star.animate();
  };

  this.setCanvas = function () {
    canvas.width = config.width;
    canvas.height = config.height;
  };

  this.setContext = function () {
    context.fillStyle   = config.star.color;
    context.strokeStyle = config.line.color;
    context.lineWidth   = config.line.width;
  };

  this.requestID;

  this.loop = function (callback) {
    callback();

    this.requestID = window.requestAnimationFrame(function () {
      this.clearRect();
      this.loop(callback);
    }.bind(this));
  };

  this.init = function () {
    var self = this;
    
    this.setCanvas();
    this.setContext();
    this.loop(this.createStars);
  };
}
