var patientSummaryModule = angular.module('modernPraxis.patientSummary', []);

patientSummaryModule.config(
  function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/patient/:id/summary', {
        templateUrl: 'modules/patientSummary/patientSummary.template.html',
        controller: 'PatientSummaryCtrl'
      });
  });

patientSummaryModule.controller(
  'PatientSummaryCtrl', ['$scope', '$routeParams', '$location', 'DataStoreService', 'visitOphtalmologyService',
    function ($scope, $routeParams, $location, dataStore, visitOphtalmologySvc) {
      var patientId = $routeParams.id;
      var patientModel = {};
      var patientViewModel = {};

      $scope.patientId = patientId;
      $scope.patient = patientViewModel;

      $scope.personalData = '';

      var dictionary = {
        firstName: 'Imię',
        lastName: 'Nazwisko',
        address: 'Adres',
        dateOfBirth: "Data urodzenia",
        citizenship: "Obywatelstwo",
        passportNumber: "Numer paszportu",
        phoneNumber: "Numer telefonu",
        email: "E-Mail",
        remarks: "Uwagi"
      }

      $scope.typeaheadPersonal = Object.keys(dictionary).map(function(val) {return dictionary[val];});
      
      var getPatientData = function() {
        dataStore.getPatientById(patientId, function(data) {
          $scope.$evalAsync(function() {
            patientModel = data;
            $scope.patient = tranformPatientToViewModel(patientModel);
            $scope.personalData = patientModel.personalData;
          });
        });
      };
      
      $scope.addVisit = function() {
        $scope.patientData.visits.push(visitOphtalmologySvc.newVisit());
        dataStore.savePatient(patientId, $scope.patientData, function(result) {
          getPatientData();
          $location.path('/patient/' + patientId + '/ophtalmology/' + result.id);
        });
      };
      
      function init() {
        getPatientData();
      }
      
      function object2array(obj) {
        return Object.keys(obj).map(function(key) { 
          return {
            key: key,
            displayName: dictionary[key] ? dictionary[key] : key,
            value: obj[key]
          }
        });
      }

      function tranformPatientToViewModel(patientModel) {
        return {
          personalData: object2array(patientModel.personalData),
          insurance: object2array(patientModel.insurance),
          visits: patientModel.visits
        }
      }

      init();
    }
  ]
);
