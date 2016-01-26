/*global angular*/

var core = angular.module('modernPraxis.core');

core.directive('mpTextarea', function() {
  return {
    restrict: 'E',
    scope: {
      label: '@'
    },
    templateUrl: 'core/components/textarea/textareaDirective.template.html'
  };
});