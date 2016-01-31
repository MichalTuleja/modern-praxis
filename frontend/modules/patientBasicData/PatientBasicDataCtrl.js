var patientBasicDataModule = angular.module('modernPraxis.patientBasicData', []);

patientBasicDataModule.config(
  function($routeProvider, $locationProvider) {
    $routeProvider
      .when('/patient/:id/basic_data', {
        templateUrl: 'modules/patientBasicData/patientBasicData.template.html',
        controller: 'PatientBasicDataCtrl'
      });
  }
);

patientBasicDataModule.controller(
  'PatientBasicDataCtrl', ['$scope', '$rootScope', '$location', '$routeParams', 'DataStoreService',
    function($scope, $rootScope, $location, $routeParams, dataStore) {

      $scope.patient = {};
      $scope.patient1 = {};

      var patientId = $routeParams.id;

      dataStore.getPatientById(patientId, function(data) {
        if(!$scope.$$phase) {
          $scope.$apply(function() {
            $scope.patient = data;
          });
        }
        else {
          $scope.patient = data;
        }
      });
      
      $scope.customForms = {
        additionalInfo: {
          typeahead: ['Imie', 'Nazwisko', 'Data urodzenia', 'Nr telefonu', 'Email', 'Nr ubezpieczenia'],
          newEntry: {
            name: "",
            desc: ""
          }
        }
      };
      
      $scope.doSave = function() {
        dataStore.savePatient(patientId, $scope.patient, function(data) {
          $rootScope.$apply(function() {
            $location.path('/patient/' + data.id + '/summary');
          });
        });
      };
    }
  ]);
