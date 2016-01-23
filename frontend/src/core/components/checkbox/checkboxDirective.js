/*global angular*/

var core = angular.module('modernPraxis.core');

core.directive('mpCheckbox', function() {
  return {
    restrict: 'E',
    scope: {
      label: '@'
    },
    templateUrl: 'core/components/checkbox/checkboxDirective.template.html'
  };
});
