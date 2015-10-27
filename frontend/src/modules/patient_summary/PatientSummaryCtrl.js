var patientSummaryModule = angular.module('patientSummaryModule', []);

patientSummaryModule.config(
        function ($routeProvider, $locationProvider) {
            $routeProvider
                    .when('/patient/:id/summary', {
                        templateUrl: 'modules/patient_summary/patientSummaryMain.template.html',
                        controller: 'PatientSummaryCtrl'
                    });
        });

patientSummaryModule.controller(
        'PatientSummaryCtrl', ['$scope', '$http',
            function ($scope, $http) {

                $http.get('core/mocks/patient.json').success(function (data) {
                    $scope.patient = data;
                });
            }]);
