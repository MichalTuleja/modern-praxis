/*global angular*/

var core = angular.module('modernPraxis.core');

core.directive('mpOpticsForm', function() {
  return {
    restrict: 'E',
    scope: {
      label: '@',
      value: '=ngModel',
      newEntry: '=',
      typeaheadFormData: '='
    },
    link: function(scope, element, attr) {
    },
    controller: ['$scope', function($scope) {
    }],
    templateUrl: 'modules/visitOphtalmology/directives/opticsForm/opticsFormDirective.template.html'
  };
});
