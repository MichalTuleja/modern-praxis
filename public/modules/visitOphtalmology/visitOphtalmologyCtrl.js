/*global angular*/

var visitOphtalmologyModule = angular.module('modernPraxis.visitOphtalmology');

visitOphtalmologyModule.config(
  function($routeProvider, $locationProvider) {
    $routeProvider
      .when('/patient/:patientId/ophtalmology/:visitId', {
        templateUrl: 'modules/visitOphtalmology/visitOphtalmology.template.html',
        controller: 'VisitOphtalmologyCtrl'
      });
  });

visitOphtalmologyModule.controller(
  'VisitOphtalmologyCtrl', ['$scope', '$location', '$routeParams', '$interval', 'DataStoreService',
    function($scope, $location, $routeParams, $interval, dataStore) {
      var patientId = $routeParams.patientId;
      var visitId = $routeParams.visitId;

      var icd9list = dataStore.getIcd9Codes();
      var icd10list = dataStore.getIcd10Codes();
      
      var icd9listArr = [];
      var icd10listArr = [];
      
      for(var i in icd9list) {
        var obj = icd9list[i];
        icd9listArr.push([ obj.code, obj.short, obj.desc ].join(', '));
      }

      for(var i in icd10list) {
        var obj = icd10list[i];
         icd10listArr.push([ obj.code, obj.desc ].join(', '));
      }
      
      $scope.icd9list = icd9listArr;
      $scope.icd10list = icd10listArr;

      $scope.examCategories = {};
      
      $scope.patientId = patientId;
      $scope.patientData;
      $scope.visitId = visitId;
      $scope.visit;
      $scope.examination;
      
      $scope.newEntry = {
        twoEyeForm: {
          label: "",
          name: "",
          rightEye: {
            desc: ""
          },
          leftEye: {
            desc: ""
          }
        },
        procedure: {
          name: "",
          desc: ""
        }
      };
      
      function save() {
        // dataStore.savePatient(patientId, $scope.patientData, function(result) {
        //   console.log(result);
        // });
      };
      
      $scope.save = save;

      $scope.addEntry = function() {
        $scope.examination.push($scope.newEntry);
      };

      $scope.dropzoneConfig = {
        parallelUploads: 3,
        maxFileSize: 30
      };
      
      var examCategories = {
        posteriorSegment: [ 
          "Opis ogólny", "Ciało szkliste", "Tarcza", "Siatkówka", "Plamka", "Obwód", "Pole widzenia" ],
        tonometry: [],
        eyelids: [ 
          "Powieki", "Rzęsy", "Spojówki powiekowe", "Spojówki gałkowe", "Aparat łzowy", "Gruczoł", "Drogi", "Punkty" ],
        anteriorSegment: [
          "Opis ogólny", "Rogówka - średnica (mm)", "Rogówka - opis", "Komora", "Tęczówka - kolor", "Tęczówka - opis", "Soczewka - opis" ],
        lens: [],
        fundus: [],
        others: [ 
          "Inne - opis" ]
      };
      
      function init() {
        dataStore.getPatientById(patientId, function(patientData) {
          $scope.patientData = patientData;
          for(var i in patientData.visits) {
            var visit = patientData.visits[i];
            if(visit.id === visitId) {
              if(!$scope.$$phase) {
                $scope.$apply(function() {
                  $scope.visit = patientData.visits[i];
                  $scope.examination = patientData.visits[i].examination;
                });
              }
              else {
                $scope.visit = patientData.visits[i];
                $scope.examination = patientData.visits[i].examination;
              }
            }
          }
        });
        
        $scope.$on("$destroy", function() {
          save();
        });
        
        $scope.examCategories = examCategories;
      };
      

        
      init();
    }
    
  ]);
