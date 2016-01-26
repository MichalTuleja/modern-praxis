/*global angular*/

var core = angular.module('modernPraxis.core');

core.directive('mpInputTable', function() {
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
      $scope.addEntry = function() {
        $scope.value.push(angular.copy($scope.newEntry));
      };
      
      $scope.delete = function(index) {
        $scope.value.splice(index, 1);
      };
    }],
    templateUrl: 'core/components/inputTable/inputTable.template.html'
  };
});
