/*global angular*/

var patientBasicDataModule = angular.module('visitOphtalmologyModule', []);

patientBasicDataModule.config(
    function($routeProvider, $locationProvider) {
        $routeProvider
            .when('/patient/:id/ophtalmology', {
                templateUrl: 'modules/visit_ophtalmology/visitOphtalmology.template.html',
                controller: 'VisitOphtalmologyCtrl'
            });
    });

patientBasicDataModule.controller(
    'VisitOphtalmologyCtrl', ['$scope', '$http', '$location',
        function($scope, $http, $location) {

            $http.get('core/mocks/patient.json').success(function(data) {
                $scope.patient = data;
            });

            $scope.doSave = function() {
                $location.path('/patient/1/summary');
            };

            $scope.dropzoneConfig = {
                parallelUploads: 3,
                maxFileSize: 30
            };
        }
    ]);
