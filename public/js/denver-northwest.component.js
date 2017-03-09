(function() {
  'use strict';

  angular.module('app')
  .component('denverNorthwest', {
    controller: controller,
    templateUrl: '../denver-northwest.template.html'
  });

  controller.$inject = ['$http'];

  function controller($http) {
    console.log("I am running");
    const vm = this;

    vm.$onInit = function() {
      (function() {
// BEGIN LANDING PAGE ANIMATION============================
    var width, height, largeHeader, canvas, ctx, circles, target, animateHeader = true;

    // Main
    initHeader();
    addListeners();

    function initHeader() {
        width = window.innerWidth;
        height = window.innerHeight;
        target = {x: 0, y: height};

        largeHeader = document.getElementById('large-header');
        largeHeader.style.height = height+'px';

        canvas = document.getElementById('demo-canvas');
        canvas.width = width;
        canvas.height = height;
        ctx = canvas.getContext('2d');

        // create particles
        circles = [];
        for(var x = 0; x < width*0.5; x++) {
            var c = new Circle();
            circles.push(c);
        }
        animate();
    }

    // Event handling
    function addListeners() {
        window.addEventListener('scroll', scrollCheck);
        window.addEventListener('resize', resize);
    }

    function scrollCheck() {
        if(document.body.scrollTop > height) animateHeader = false;
        else animateHeader = true;
    }

    function resize() {
        width = window.innerWidth;
        height = window.innerHeight;
        largeHeader.style.height = height+'px';
        canvas.width = width;
        canvas.height = height;
    }

    function animate() {
        if(animateHeader) {
            ctx.clearRect(0,0,width,height);
            for(var i in circles) {
                circles[i].draw();
            }
        }
        requestAnimationFrame(animate);
    }

    // Canvas manipulation
    function Circle() {
        var _this = this;

        // constructor
        (function() {
            _this.pos = {};
            init();
            console.log(_this);
        })();

        function init() {
            _this.pos.x = Math.random()*width;
            _this.pos.y = height+Math.random()*100;
            _this.alpha = 0.1+Math.random()*0.3;
            _this.scale = 0.1+Math.random()*0.3;
            _this.velocity = Math.random();
        }

        this.draw = function() {
            if(_this.alpha <= 0) {
                init();
            }
            _this.pos.y -= _this.velocity;
            _this.alpha -= 0.0005;
            ctx.beginPath();
            ctx.arc(_this.pos.x, _this.pos.y, _this.scale*10, 0, 2 * Math.PI, false);
            ctx.fillStyle = 'rgba(255,255,255,'+ _this.alpha+')';
            ctx.fill();
        };
    }

})(); //END LANDING PAGE ANIMATION=======================
//trigger tooltip functionality
$(function () {
  $('[data-toggle="tooltip"]').tooltip();
});


    }; //end of oninit function

    vm.getLandmark = function(id) {
      console.log("getting to landmark function");
      $http.get(`/landmarks/${id}`).then(function(response) {
        console.log(response.data);
        vm.landmark = response.data;
      });
    };

    vm.sendEmail = function() {
      console.log("getting to email function");
      $http.post('/send').then(function(response) {
        console.log("response from api:", response.data);
      });
    };

  } //end of controller function


}()); //end of IIFE
