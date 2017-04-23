/*global angular*/

var core = angular.module('modernPraxis.core');

core.directive('mpInputTable', function() {
  return {
    require: 'ngModel',
    // restrict: 'E',
    scope: true,
    link: function(scope, element, attrs, controller, transcludeFn){
      // if (!model) return;
      // scope.data = [];

      // scope.onChange = function(){
      //   console.log(controller.$modelValue);
      // };

      // controller.$render = function() {
      //   console.log(controller.$modelValue);
      //   if(typeof controller.$modelValue === 'object') {
      //     scope.data = object2array(controller.$modelValue);
      //   }
      //   // scope.value = controller.$modelValue;
      // };
      
      // function object2array(obj) {
      //   return Object.keys(obj).map(function(key) { 
      //     return {
      //       key: key,
      //       displayName: dictionary[key] ? dictionary[key] : key,
      //       value: data.personalData[key]
      //     }
      //   });
      // }

    },
    controller: ['$scope', function($scope) {
      $scope.$evalAsync(function() {
        console.log($scope.value);
      });
      
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
