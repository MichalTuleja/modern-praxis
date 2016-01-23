/*global angular*/

var core = angular.module('modernPraxis.core');

core.directive('eyeExamTable', function() {
  return {
    restrict: 'E',
    scope: {
      label: '@',
      value: '=ngModel',
      newEntry: '=',
      typeaheadFormData: '='
    },
    link: function(scope, element, attr) {
      /*
      scope.$watch('value', function (newVal) {
        console.log('value', newVal);
        scope.value = newVal;
      });
      */
      
      scope.delete = function() {
        console.log('xD');
      };
    },
    controller: ['$scope', function($scope) {
      $scope.addEntry = function() {
        $scope.value.push($scope.newEntry);
      };
    }],
    templateUrl: 'core/components/eyeExamTable/eyeExamTable.template.html'
  };
});
