/*global angular*/

var core = angular.module('modernPraxis.core');

core.directive('mpInputTable', function() {
  return {
    require: 'ngModel',
    // restrict: 'E',
    scope: {
      label: '@',
      value: '=ngModel',
      newEntry: '=',
      typeaheadFormData: '=',
      header: '=',
      counter: '=',
      numbering: '='
    },
    link: function(scope, element, attrs, controller, transcludeFn){
    },
    controller: ['$scope', function($scope) {
      var newEntry = {
        key: "",
        value: "",
        displayName: ""
      }

      $scope.addEntry = function() {
        $scope.value.push(angular.copy(newEntry));
      };
      
      $scope.delete = function(index) {
        $scope.value.splice(index, 1);
      };

    }],
    templateUrl: 'core/components/inputTable/inputTable.template.html'
  };
});
