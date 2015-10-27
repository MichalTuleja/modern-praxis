/* Database App
 * 
 * Author: Michal Tuleja <michal.tuleja@outlook.com>
 */

'use strict';

/*global angular*/

// Initialize app
var databaseApp = angular.module('ngApp', [
    'ngRoute',
    'ui.bootstrap',
    'ui.bootstrap.tabsleft',
    //'ngDropzone',
    'mwl.calendar',
    'loginModule',
    'navbarModule',
    'footerModule',
    'dashboardModule',
    'searchModule',
    'calendarModule',
    'dictionaryModule',
    'patientSummaryModule',
    'patientBasicDataModule',
    'visitOphtalmologyModule',
    'reportIndexModule',
    'searchSvcModule'
]);

databaseApp.config(function($routeProvider, $locationProvider) {
    $routeProvider
        .when('/dashboard', {
            templateUrl: 'modules/dashboard/dashboard2.template.html',
            controller: 'DashboardCtrl'
        })
        .when('/calendar', {
            templateUrl: 'modules/calendar/calendar.template.html',
            controller: 'CalendarCtrl'
        })
        .when('/login', {
            templateUrl: 'core/components/login/login.template.html',
            controller: 'LoginCtrl'
        }).
    otherwise({
        redirectTo: '/dashboard'
    });

    $locationProvider.html5Mode(false);

});

databaseApp.directive('focus',
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

databaseApp.directive('focusMe', function($timeout) {
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

// define additional triggers on Tooltip and Popover
databaseApp.config(['$tooltipProvider', function($tooltipProvider){
    $tooltipProvider.setTriggers({
        'show': 'hide'
    });
}]);