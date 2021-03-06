<!DOCTYPE html>
<html>
<head>
  <title></title>
  <script type="text/javascript" src="https://code.jquery.com/jquery-3.1.1.js"></script>
</head>
<body style=" padding: 0; margin: 0">

  <div style="position: relative; width: 850px; height: 100vh; margin: 0; padding: 0;  background-color: #aaa">
    <canvas id="test" style="position: absolute; border-radius: 150px"></canvas>
  </div>
  <script type="text/javascript">
    /*
 * requestAnimationFrame pollyfill
 */
if (!window.requestAnimationFrame) {
  window.requestAnimationFrame = (window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.msRequestAnimationFrame || window.oRequestAnimationFrame || function (callback) {
    return window.setTimeout(callback, 1000 / 60);
  });
}

$(document).ready(function(){
    
    var onMobile = false;
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) { onMobile = true; }
    
    if( ( onMobile === false ) ) {
        
        // Init plugin
    $('canvas').constellation({

    });
        
    } else {}
    
});

/*!
 * Mantis.js / jQuery / Zepto.js plugin for Constellation
 * @version 1.2.2
 * @author AcauÃ£ Montiel <contato@acauamontiel.com.br>
 * @license http://acaua.mit-license.org/
 */
(function ($, window) {
  /**
   * Makes a nice constellation on canvas
   * @constructor Constellation
   */
  function Constellation (canvas, options) {
    var $c = $('#test');
    var $canvas = $(canvas),
      context = canvas.getContext('2d'),
      requestID,
      defaults = {
        star: {
          color: 'rgba(255, 0, 255, .5)',
          width: 5
        },
        line: {
          color: 'rgba(0, 255, 0, .5)',
          width: 0.4
        },
        position: {
          x: 0, // This value will be overwritten at startup
          y: 0 // This value will be overwritten at startup
        },
        width: 300,
        height: 300,
        velocity: 0.5,
        length: 25,
        distance: 50,
        radius: 150,
        stars: []
      },
      config = $.extend(true, {}, defaults, options);

    function Star () {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;

      this.vx = (config.velocity * Math.pow(-1, Math.floor((1 + Math.random() * 2))));
      this.vy = (config.velocity * Math.pow(-1, Math.floor((1 + Math.random() * 2))));

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
            star.vx = star.vx;
            star.vy = - star.vy;
          } else if (star.x < 0 || star.x > canvas.width - 35) {
            star.vx = - star.vx;
            star.vy = star.vy;
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
              if (
                (iStar.x - config.position.x) < config.radius &&
                (iStar.y - config.position.y) < config.radius &&
                (iStar.x - config.position.x) > - config.radius &&
                (iStar.y - config.position.y) > - config.radius
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
      }
    };

    this.createStars = function () {
      var length = config.length,
        star,
        i;

      context.clearRect(0, 0, canvas.width, canvas.height);

      for (i = 0; i < length; i++) {
        config.stars.push(new Star());
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
      context.fillStyle = config.star.color;
      context.strokeStyle = config.line.color;
      context.lineWidth = config.line.width;
    };

    this.setInitialPosition = function () {
      if (!options || !options.hasOwnProperty('position')) {
        config.position = {
          x: canvas.width * 0.7,
          y: canvas.height * 0.7
        };
      }
    };

    this.loop = function (callback) {
      callback();

      requestID = window.requestAnimationFrame(function () {
        this.loop(callback);
      }.bind(this));
    };

    this.bind = function () {
      var self = this;
      $(window).on('mousemove', function(e) {
        if (e.pageX > 850) {
          window.cancelAnimationFrame(requestID);
          context.clearRect(0, 0, canvas.width, canvas.height);
        } else {
          $c.css('left', e.pageX - 150); 
          $c.css('top',  e.pageY - 150);
          self.createStars();
        }
      });
    };

    this.init = function () {
      this.setCanvas();
      this.setContext();
      this.setInitialPosition();
      this.loop(this.createStars);
      this.bind();
    };
  }

  $.fn.constellation = function (options) {
    return this.each(function () {
      var c = new Constellation(this, options);
      c.init();
    });
  };
})($, window);

  </script>
</body>
</html>