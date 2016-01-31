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
  'PatientSummaryCtrl', ['$scope', '$routeParams', 'DataStoreService',
    function ($scope, $routeParams, dataStore) {
      var patientId = $routeParams.id;
      $scope.patientId = patientId;
      $scope.patient = {};
      
      dataStore.getPatientById(patientId, function(data) {
        $scope.$apply(function() {
          $scope.patient = data;
        });
      });
    }
  ]
);
