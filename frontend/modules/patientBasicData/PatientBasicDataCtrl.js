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
  'PatientBasicDataCtrl', ['$scope', '$location', '$routeParams', 'DataStoreService',
    function($scope, $location, $routeParams, dataStore) {

      $scope.patient1 = {};

      var patientId = $routeParams.id;

      dataStore.getPatientById(patientId, function(data) {
        $scope.patient = data;
      });
      
      $scope.patient1.basicData = [
        {
          name: "Imie",
          desc: "Jan"
        },
        {
          name: "Nazwisko",
          desc: "Nowak"
        },
        {
          name: "Data urodzenia",
          desc: "25.09.1975"
        }
      ];
      
      $scope.basicDataFields = ['Imie', 'Nazwisko', 'Data urodzenia', 'Nr telefonu', 'Email', 'Nr ubezpieczenia'];
      
      $scope.newEntry ={
        basicData:{
          name: "",
          desc: ""
        }
      };
      
      $scope.doSave = function() {
        dataStore.savePatient(patientId, $scope.patient, function() {
          $location.path('/patient/1/summary');
        });
      };
    }
  ]);
