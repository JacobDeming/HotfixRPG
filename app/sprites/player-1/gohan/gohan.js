$("#standing").on('click', function(){
    (function() {
  // http://paulirish.com/2011/requestanimationframe-for-smart-animating/
  // http://my.opera.com/emoller/blog/2011/12/20/requestanimationframe-for-smart-er-animating
  // requestAnimationFrame polyfill by Erik Möller. fixes from Paul Irish and Tino Zijdel
  // MIT license

    var lastTime = 0;
    var vendors = ['ms', 'moz', 'webkit', 'o'];
    for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
        window.requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];
        window.cancelAnimationFrame = window[vendors[x]+'CancelAnimationFrame'] 
                                   || window[vendors[x]+'CancelRequestAnimationFrame'];
    }
 
    if (!window.requestAnimationFrame)
        window.requestAnimationFrame = function(callback, element) {
            var currTime = new Date().getTime();
            var timeToCall = Math.max(0, 16 - (currTime - lastTime));
            var id = window.setTimeout(function() { callback(currTime + timeToCall); }, 
              timeToCall);
            lastTime = currTime + timeToCall;
            return id;
        };
 
    if (!window.cancelAnimationFrame)
        window.cancelAnimationFrame = function(id) {
            clearTimeout(id);
        };
}());

(function () {
      
  var coin,
    coinImage,
    canvas;         

  function gameLoop () {
  
    window.requestAnimationFrame(gameLoop);

    coin.update();
    coin.render();
  }
  
  function sprite (options) {
  
    var that = {},
      frameIndex = 0,
      tickCount = 0,
      ticksPerFrame = options.ticksPerFrame || 0,
      numberOfFrames = options.numberOfFrames || 1;
    
    that.context = options.context;
    that.width = options.width;
    that.height = options.height;
    that.image = options.image;
    
    that.update = function () {

            tickCount += 1;

            if (tickCount > ticksPerFrame) {

        tickCount = 0;
        
                // If the current frame index is in range
                if (frameIndex < numberOfFrames - 1) {  
                    // Go to the next frame
                    frameIndex += 1;
                } else {
                    frameIndex = 0;
                }
            }
        };
    
    that.render = function () {
    
      // Clear the canvas
      that.context.clearRect(0, 0, that.width, that.height);
      
      // Draw the animation
      that.context.drawImage(
        that.image,
        frameIndex * that.width / numberOfFrames,
        0,
        that.width / numberOfFrames,
        that.height,
        0,
        0,
        that.width / numberOfFrames,
        that.height);
    };
    
    return that;
  }
  
  // Get canvas
  canvas = document.getElementById("coinAnimation");
  canvas.width = 125;
  canvas.height = 162;
  
  // Create sprite sheet
  coinImage = new Image();  
  
  // Create sprite
  coin = sprite({
    context: canvas.getContext("2d"),
    width: 373,
    height: 162,
    image: coinImage,
    numberOfFrames: 4,
    ticksPerFrame: 4
  });
  
  // Load sprite sheet
  coinImage.addEventListener("load", gameLoop);
  coinImage.src = "gohan-standing.png";

} ());


});

$("#attack").on('click', function(){
  // Copyright 2013 William Malone (www.williammalone.com)
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//   http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
 
(function() {
  // http://paulirish.com/2011/requestanimationframe-for-smart-animating/
  // http://my.opera.com/emoller/blog/2011/12/20/requestanimationframe-for-smart-er-animating
  // requestAnimationFrame polyfill by Erik Möller. fixes from Paul Irish and Tino Zijdel
  // MIT license

    var lastTime = 0;
    var vendors = ['ms', 'moz', 'webkit', 'o'];
    for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
        window.requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];
        window.cancelAnimationFrame = window[vendors[x]+'CancelAnimationFrame'] 
                                   || window[vendors[x]+'CancelRequestAnimationFrame'];
    }
 
    if (!window.requestAnimationFrame)
        window.requestAnimationFrame = function(callback, element) {
            var currTime = new Date().getTime();
            var timeToCall = Math.max(0, 16 - (currTime - lastTime));
            var id = window.setTimeout(function() { callback(currTime + timeToCall); }, 
              timeToCall);
            lastTime = currTime + timeToCall;
            return id;
        };
 
    if (!window.cancelAnimationFrame)
        window.cancelAnimationFrame = function(id) {
            clearTimeout(id);
        };
}());

(function () {
      
  var coin,
    coinImage,
    canvas;         

  function gameLoop () {
  
    window.requestAnimationFrame(gameLoop);

    coin.update();
    coin.render();
  }
  
  function sprite (options) {
  
    var that = {},
      frameIndex = 0,
      tickCount = 0,
      ticksPerFrame = options.ticksPerFrame || 0,
      numberOfFrames = options.numberOfFrames || 1;
    
    that.context = options.context;
    that.width = options.width;
    that.height = options.height;
    that.image = options.image;
    
    that.loop = options.loop;

    that.update = function () {

        tickCount += 1;
      
        if (tickCount > ticksPerFrame) {
        
            tickCount = 0;
        
            // If the current frame index is in range
            if (frameIndex < numberOfFrames - 1) {  
                // Go to the next frame
                frameIndex += 1;
            } else if (that.loop) {
                frameIndex = 0;
            }
        }
    };
    
    that.render = function () {
    
      // Clear the canvas
      that.context.clearRect(0, 0, that.width, that.height);
      
      // Draw the animation
      that.context.drawImage(
        that.image,
        frameIndex * that.width / numberOfFrames,
        0,
        that.width / numberOfFrames,
        that.height,
        0,
        0,
        that.width / numberOfFrames,
        that.height);
    };
    
    return that;
  }
  
  // Get canvas
  canvas = document.getElementById("coinAnimation");
  canvas.width = 133;
  canvas.height = 162;
  
  // Create sprite sheet
  coinImage = new Image();  
  
  // Create sprite
  coin = sprite({
    context: canvas.getContext("2d"),
    width: 588,
    height: 162,
    image: coinImage,
    numberOfFrames: 3.9,
    ticksPerFrame: 8

  });
  
  // Load sprite sheet
  coinImage.addEventListener("load", gameLoop);
  coinImage.src = "gohan-punch.png";

} ());


});

$("#magic").on('click', function(){
    (function() {
  // http://paulirish.com/2011/requestanimationframe-for-smart-animating/
  // http://my.opera.com/emoller/blog/2011/12/20/requestanimationframe-for-smart-er-animating
  // requestAnimationFrame polyfill by Erik Möller. fixes from Paul Irish and Tino Zijdel
  // MIT license

    var lastTime = 0;
    var vendors = ['ms', 'moz', 'webkit', 'o'];
    for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
        window.requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];
        window.cancelAnimationFrame = window[vendors[x]+'CancelAnimationFrame'] 
                                   || window[vendors[x]+'CancelRequestAnimationFrame'];
    }
 
    if (!window.requestAnimationFrame)
        window.requestAnimationFrame = function(callback, element) {
            var currTime = new Date().getTime();
            var timeToCall = Math.max(0, 16 - (currTime - lastTime));
            var id = window.setTimeout(function() { callback(currTime + timeToCall); }, 
              timeToCall);
            lastTime = currTime + timeToCall;
            return id;
        };
 
    if (!window.cancelAnimationFrame)
        window.cancelAnimationFrame = function(id) {
            clearTimeout(id);
        };
}());

(function () {
      
  var coin,
    coinImage,
    canvas;         

  function gameLoop () {
  
    window.requestAnimationFrame(gameLoop);

    coin.update();
    coin.render();
  }
  
  function sprite (options) {
  
    var that = {},
      frameIndex = 0,
      tickCount = 0,
      ticksPerFrame = options.ticksPerFrame || 0,
      numberOfFrames = options.numberOfFrames || 1;
    
    that.context = options.context;
    that.width = options.width;
    that.height = options.height;
    that.image = options.image;
    
    that.loop = options.loop;

    that.update = function () {

        tickCount += 1;
      
        if (tickCount > ticksPerFrame) {
        
            tickCount = 0;
        
            // If the current frame index is in range
            if (frameIndex < numberOfFrames - 1) {  
                // Go to the next frame
                frameIndex += 1;
            } else if (that.loop) {
                frameIndex = 0;
            }
        }
    };
    
    that.render = function () {
    
      // Clear the canvas
      that.context.clearRect(0, 0, that.width, that.height);
      
      // Draw the animation
      that.context.drawImage(
        that.image,
        frameIndex * that.width / numberOfFrames,
        0,
        that.width / numberOfFrames,
        that.height,
        0,
        0,
        that.width / numberOfFrames,
        that.height);
    };
    
    return that;
  }
  
  // Get canvas
  canvas = document.getElementById("coinAnimation");
  canvas.width = 135;
  canvas.height = 162;
  
  // Create sprite sheet
  coinImage = new Image();  
  
  // Create sprite
  coin = sprite({
    context: canvas.getContext("2d"),
    width: 280,
    height: 162,
    image: coinImage,
    numberOfFrames: 2,
    ticksPerFrame: 10
  });
  
  // Load sprite sheet
  coinImage.addEventListener("load", gameLoop);
  coinImage.src = "gohan-magic.png";

} ());

});

$("#damage").on('click', function(){
        (function() {
  // http://paulirish.com/2011/requestanimationframe-for-smart-animating/
  // http://my.opera.com/emoller/blog/2011/12/20/requestanimationframe-for-smart-er-animating
  // requestAnimationFrame polyfill by Erik Möller. fixes from Paul Irish and Tino Zijdel
  // MIT license

    var lastTime = 0;
    var vendors = ['ms', 'moz', 'webkit', 'o'];
    for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
        window.requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];
        window.cancelAnimationFrame = window[vendors[x]+'CancelAnimationFrame'] 
                                   || window[vendors[x]+'CancelRequestAnimationFrame'];
    }
 
    if (!window.requestAnimationFrame)
        window.requestAnimationFrame = function(callback, element) {
            var currTime = new Date().getTime();
            var timeToCall = Math.max(0, 16 - (currTime - lastTime));
            var id = window.setTimeout(function() { callback(currTime + timeToCall); }, 
              timeToCall);
            lastTime = currTime + timeToCall;
            return id;
        };
 
    if (!window.cancelAnimationFrame)
        window.cancelAnimationFrame = function(id) {
            clearTimeout(id);
        };
}());

(function () {
      
  var coin,
    coinImage,
    canvas;         

  function gameLoop () {
  
    window.requestAnimationFrame(gameLoop);

    coin.update();
    coin.render();
  }
  
  function sprite (options) {
  
    var that = {},
      frameIndex = 0,
      tickCount = 0,
      ticksPerFrame = options.ticksPerFrame || 0,
      numberOfFrames = options.numberOfFrames || 1;
    
    that.context = options.context;
    that.width = options.width;
    that.height = options.height;
    that.image = options.image;
    
    that.loop = options.loop;

    that.update = function () {

        tickCount += 1;
      
        if (tickCount > ticksPerFrame) {
        
            tickCount = 0;
        
            // If the current frame index is in range
            if (frameIndex < numberOfFrames - 1) {  
                // Go to the next frame
                frameIndex += 1;
            } else if (that.loop) {
                frameIndex = 0;
            }
        }
    };
    
    that.render = function () {
    
      // Clear the canvas
      that.context.clearRect(0, 0, that.width, that.height);
      
      // Draw the animation
      that.context.drawImage(
        that.image,
        frameIndex * that.width / numberOfFrames,
        0,
        that.width / numberOfFrames,
        that.height,
        0,
        0,
        that.width / numberOfFrames,
        that.height);
    };
    
    return that;
  }
  
  // Get canvas
  canvas = document.getElementById("coinAnimation");
  canvas.width = 122;
  canvas.height = 162;
  
  // Create sprite sheet
  coinImage = new Image();  
  
  // Create sprite
  coin = sprite({
    context: canvas.getContext("2d"),
    width: 122,
    height: 162,
    image: coinImage,
    numberOfFrames: 1,
    ticksPerFrame: 10
  });
  
  // Load sprite sheet
  coinImage.addEventListener("load", gameLoop);
  coinImage.src = "gohan-damage.png";

} ());
});

$("#defeat").on('click', function(){
      (function() {
  // http://paulirish.com/2011/requestanimationframe-for-smart-animating/
  // http://my.opera.com/emoller/blog/2011/12/20/requestanimationframe-for-smart-er-animating
  // requestAnimationFrame polyfill by Erik Möller. fixes from Paul Irish and Tino Zijdel
  // MIT license

    var lastTime = 0;
    var vendors = ['ms', 'moz', 'webkit', 'o'];
    for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
        window.requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];
        window.cancelAnimationFrame = window[vendors[x]+'CancelAnimationFrame'] 
                                   || window[vendors[x]+'CancelRequestAnimationFrame'];
    }
 
    if (!window.requestAnimationFrame)
        window.requestAnimationFrame = function(callback, element) {
            var currTime = new Date().getTime();
            var timeToCall = Math.max(0, 16 - (currTime - lastTime));
            var id = window.setTimeout(function() { callback(currTime + timeToCall); }, 
              timeToCall);
            lastTime = currTime + timeToCall;
            return id;
        };
 
    if (!window.cancelAnimationFrame)
        window.cancelAnimationFrame = function(id) {
            clearTimeout(id);
        };
}());

(function () {
      
  var coin,
    coinImage,
    canvas;         

  function gameLoop () {
  
    window.requestAnimationFrame(gameLoop);

    coin.update();
    coin.render();
  }
  
  function sprite (options) {
  
    var that = {},
      frameIndex = 0,
      tickCount = 0,
      ticksPerFrame = options.ticksPerFrame || 0,
      numberOfFrames = options.numberOfFrames || 1;
    
    that.context = options.context;
    that.width = options.width;
    that.height = options.height;
    that.image = options.image;
    
    that.loop = options.loop;

    that.update = function () {

        tickCount += 1;
      
        if (tickCount > ticksPerFrame) {
        
            tickCount = 0;
        
            // If the current frame index is in range
            if (frameIndex < numberOfFrames - 1) {  
                // Go to the next frame
                frameIndex += 1;
            } else if (that.loop) {
                frameIndex = 0;
            }
        }
    };
    
    that.render = function () {
    
      // Clear the canvas
      that.context.clearRect(0, 0, that.width, that.height);
      
      // Draw the animation
      that.context.drawImage(
        that.image,
        frameIndex * that.width / numberOfFrames,
        0,
        that.width / numberOfFrames,
        that.height,
        0,
        0,
        that.width / numberOfFrames,
        that.height);
    };
    
    return that;
  }
  
  // Get canvas
  canvas = document.getElementById("coinAnimation");
  canvas.width = 162;
  canvas.height = 162;
  
  // Create sprite sheet
  coinImage = new Image();  
  
  // Create sprite
  coin = sprite({
    context: canvas.getContext("2d"),
    width: 162,
    height: 162,
    image: coinImage,
    numberOfFrames: 1,
    ticksPerFrame: 10
  });
  
  // Load sprite sheet
  coinImage.addEventListener("load", gameLoop);
  coinImage.src = "gohan-defeat.png";

} ());
});