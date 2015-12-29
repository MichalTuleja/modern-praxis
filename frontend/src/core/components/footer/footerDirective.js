/*global angular*/

var coreModule = angular.module('modernPraxis.core');

coreModule.directive('mpFooter', function() {
  return {
    restrict: 'E',
    templateUrl: 'core/components/footer/footer.template.html'
  };
});