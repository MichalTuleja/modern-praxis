/*global angular*/

var core = angular.module('modernPraxis.core');

core.directive('mpEyeExamTable', function() {
  return {
    restrict: 'E',
    scope: {
      label: '@',
      value: '=ngModel',
      newEntry: '=',
      typeaheadFormData: '=',
      showName: '='
    },
    link: function(scope, element, attr) {
      scope.showName = scope.showName === undefined ? true : scope.showName;
    },
    controller: ['$scope', function($scope) {
      $scope.addEntry = function() {
        $scope.value.push(angular.copy($scope.newEntry));
      };
      
      $scope.delete = function(index) {
        $scope.value.splice(index, 1);
      };
    }],
    templateUrl: 'core/components/eyeExamTable/eyeExamTable.template.html'
  };
});
