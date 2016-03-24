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
      $scope.patientId = patientId;
      $scope.patientData = {};
      
      var getPatientData = function() {
        dataStore.getPatientById(patientId, function(data) {
          $scope.$apply(function() {
            $scope.patientData = data;
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
      
      init();
    }
  ]
);
