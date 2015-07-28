var visitSummaryModule = angular.module('visitSummaryModule', []);

visitSummaryModule.config(
        function ($routeProvider, $locationProvider) {
            $routeProvider
                    .when('/patient/:id/summary', {
                        templateUrl: 'modules/visit_summary/VisitSummaryTemplate.html',
                        controller: 'VisitSummaryCtrl'
                    });
        });

visitSummaryModule.controller(
        'VisitSummaryCtrl', ['$scope', '$http',
            function ($scope, $http) {

                $http.get('core/mocks/patient.json').success(function (data) {
                    $scope.patient = data;
                });
            }]);

