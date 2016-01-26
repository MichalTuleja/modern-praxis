/*global angular*/

var patientBasicDataModule = angular.module('visitOphtalmologyModule', []);

patientBasicDataModule.directive('inputDpt', function() {
  return {
    restrict: 'E',
    scope: {
      
    },
    templateUrl: 'dptInputDirective.template.html'
  };
});