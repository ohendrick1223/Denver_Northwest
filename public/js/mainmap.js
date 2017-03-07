'use strict';
console.log("getting to mapjs2");
angular.module('app').directive('mainMap', ['$compile', function ($compile) {
  console.log("getting to main map");
    return {
        restrict: 'EA',
        templateUrl: 'assets/maps/01_mainMap.svg'
    };
}]);
angular.module('app').directive('berkeleyMap', ['$compile', function ($compile) {
  console.log("getting to berkeley map");
    return {
        restrict: 'A',
        templateUrl: 'assets/maps/berkeleyLandmarked.svg'
    };
}]);
angular.module('app').directive('sunnysideMap', ['$compile', function ($compile) {
  console.log("getting to sunnyside map");
    return {
        restrict: 'EA',
        templateUrl: 'assets/maps/03_sunnysideMap.svg'
    };
}]);
angular.module('app').directive('westHighlandsMap', ['$compile', function ($compile) {
  console.log("getting to main map");
    return {
        restrict: 'EA',
        templateUrl: 'assets/maps/04_westHighlandsMap.svg'
    };
}]);
angular.module('app').directive('lowerHighlandsMap', ['$compile', function ($compile) {
  console.log("getting to main map");
    return {
        restrict: 'EA',
        templateUrl: 'assets/maps/05_lowerHighlandsMap.svg'
    };
}]);
angular.module('app').directive('sloansLakeMap', ['$compile', function ($compile) {
  console.log("getting to main map");
    return {
        restrict: 'EA',
        templateUrl: 'assets/maps/06_sloansLakeMap.svg'
    };
}]);
angular.module('app').directive('jeffersonParkMap', ['$compile', function ($compile) {
  console.log("getting to main map");
    return {
        restrict: 'EA',
        templateUrl: 'assets/maps/07_jeffersonParkMap.svg'
    };
}]);

//link in other directives for all map svgs here!
