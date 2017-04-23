/* global angular */

var reportIndexModule = angular.module('modernPraxis.reports', []);

reportIndexModule.config(
    function($routeProvider, $locationProvider) {
        $routeProvider
            .when('/reports', {
                templateUrl: 'modules/reports/reportIndex.template.html',
                controller: 'ReportIndexCtrl'
            });
    });

reportIndexModule.controller(
    'reportIndexCtrl', ['$scope', '$http',
        function($scope, $http) {


        }
    ]);
