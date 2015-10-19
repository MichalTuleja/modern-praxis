var patientBasicDataModule = angular.module('patientBasicDataModule', []);

patientBasicDataModule.config(
    function($routeProvider, $locationProvider) {
        $routeProvider
            .when('/patient/:id/basic_data', {
                templateUrl: 'modules/patient_basic_data/PatientBasicDataTemplate.html',
                controller: 'PatientBasicDataCtrl'
            });
    });

patientBasicDataModule.controller(
    'PatientBasicDataCtrl', ['$scope', '$http', '$location',
        function($scope, $http, $location) {

            $http.get('core/mocks/patient.json').success(function(data) {
                $scope.patient = data;
            });

            $scope.doSave = function() {
                $location.path('/patient/1/summary');
            };
        }
    ]);
