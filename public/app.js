/* Database App
 * 
 * Author: Michal Tuleja <michal.tuleja@outlook.com>
 */

'use strict';

/*global angular*/

// Initialize app
var modernPraxisApp = angular.module('modernPraxis', [
    'ngRoute',
    'ui.bootstrap',
    'ui.bootstrap.tabsleft',
    //'ngDropzone',
    'modernPraxis.core',
    //'modernPraxis.dropzone',
    'modernPraxis.login',
    'modernPraxis.dashboard',
    'modernPraxis.search',
    'modernPraxis.calendar',
    'modernPraxis.dictionary',
    'modernPraxis.patientSummary',
    'modernPraxis.patientBasicData',
    'modernPraxis.visitOphtalmology',
    'modernPraxis.reports'
]);

modernPraxisApp.config(function($routeProvider, $locationProvider) {
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
