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
        templateUrl: 'assets/maps/sunnyside_final.svg'
    };
}]);
angular.module('app').directive('westHighlandsMap', ['$compile', function ($compile) {
  console.log("getting to main map");
    return {
        restrict: 'EA',
        templateUrl: 'assets/maps/west_highland_final.svg'
    };
}]);
angular.module('app').directive('lowerHighlandsMap', ['$compile', function ($compile) {
  console.log("getting to main map");
    return {
        restrict: 'EA',
        templateUrl: 'assets/maps/lower_highland_final.svg'
    };
}]);
angular.module('app').directive('sloansLakeMap', ['$compile', function ($compile) {
  console.log("getting to main map");
    return {
        restrict: 'EA',
        templateUrl: 'assets/maps/sloans_lake_final.svg'
    };
}]);
angular.module('app').directive('jeffersonParkMap', ['$compile', function ($compile) {
  console.log("getting to main map");
    return {
        restrict: 'EA',
        templateUrl: 'assets/maps/jefferson_park_final.svg'
    };
}]);

//link in other directives for all map svgs here!
