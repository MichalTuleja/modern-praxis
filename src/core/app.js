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
        'searchModule',
        'patientSummaryModule',
        'patientBasicDataModule'
    ]);

databaseApp.config(function ($routeProvider, $locationProvider) {
    $routeProvider
        .when('/dashboard', {
            templateUrl: 'modules/dashboard/dashboard.template.html',
            controller: 'DashboardCtrl'
        }).
        when('/login', {
            templateUrl: 'core/components/login/login.template.html',
            controller: 'LoginCtrl'
        }).
        otherwise({
            redirectTo: '/dashboard'
        });

    $locationProvider.html5Mode(false);

});