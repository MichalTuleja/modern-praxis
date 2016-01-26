/*global angular*/

var voModule = angular.module('modernPraxis.visitOphtalmology');

voModule.directive('mpSymmetricForm', function() {
  return {
    restrict: 'E',
    scope: {
        layout: '='
    },
    templateUrl: 'modules/visitOphtalmology/directives/symmetricFormDirective.template.html'
  };
});

voModule.directive('mpStandardForm', function() {
  return {
    restrict: 'E',
    scope: {
        layout: '='
    },
    templateUrl: 'modules/visitOphtalmology/directives/standardFormDirective.template.html'
  };
});