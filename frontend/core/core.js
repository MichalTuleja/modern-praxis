/*global angular*/

var coreModule = angular.module('modernPraxis.core', []);

coreModule.directive('focus',
    function($timeout) {
        return {
            scope: {
                trigger: '@focus'
            },
            link: function(scope, element) {
                scope.$watch('trigger', function(value) {
                    if (value === "true") {
                        $timeout(function() {
                            element[0].focus();
                        });
                    }
                });
            }
        };
    }
);

coreModule.directive('focusMe', function($timeout) {
  return {
    link: function(scope, element, attrs) {
      scope.$watch(attrs.focusMe, function(value) {
        if(value === true) { 
          console.log('value=',value);
          //$timeout(function() {
            element[0].focus();
            scope[attrs.focusMe] = false;
          //});
        }
      });
    }
  };
});

// // define additional triggers on Tooltip and Popover
// coreModule.config(['$tooltipProvider', function($tooltipProvider){
//     $tooltipProvider.setTriggers({
//         'show': 'hide'
//     });
// }]);