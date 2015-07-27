/* Database App
 * 
 * Author: Michal Tuleja <michal.tuleja@outlook.com>
 */

'use strict';

// Initialize app
var databaseApp = angular.module('ngApp', 
[
    //'ui.bootstrap', 
    'ngRoute',
    'loginModule',
    'navbarModule',
    'dashboardModule',
    //'browserModule'
]);

databaseApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/dashboard', {
        templateUrl: 'modules/dashboard/dashboard.template.html',
        controller: 'DashboardCtrl'
      }).
      when('/browse', {
        templateUrl: 'modules/browser/browser.template.html',
        controller: 'BrowserCtrl'
      }).
      when('/login', {
        templateUrl: 'core/components/login/login.template.html',
        controller: 'LoginCtrl'
      }).
      otherwise({
        redirectTo: '/dashboard'
      });
  }]);
  


