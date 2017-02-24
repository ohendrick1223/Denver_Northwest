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
      //make get requests
    };
  } //end of controller function


}()); //end of IIFE
