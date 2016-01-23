/*global angular*/

var visitOphtalmologyModule = angular.module('modernPraxis.visitOphtalmology', []);

visitOphtalmologyModule.config(
  function($routeProvider, $locationProvider) {
    $routeProvider
      .when('/patient/:id/ophtalmology', {
        templateUrl: 'modules/visitOphtalmology/visitOphtalmology.template.html',
        controller: 'VisitOphtalmologyCtrl'
      });
  });

visitOphtalmologyModule.controller(
  'VisitOphtalmologyCtrl', ['$scope', '$http', '$location',
    function($scope, $http, $location) {

      $http.get('core/mocks/patient.json').success(function(data) {
        $scope.patient = data;
      });

  
      $scope.icd9list = [
        {code: "1235", desc: "Przykladowy opis"},
        {code: "1234556", desc: "Przykladowy opis"}
      ];
      
      $scope.examination = [];
      $scope.examCategories = examCategories;
      
      $scope.newEntry = {
        twoEyeForm: {
          name: "",
          rightEye: {
            desc: ""
          },
          leftEye: {
            desc: ""
          }
        }
      };

      $scope.save = function() {
        console.log('save');
  
        console.log($scope.sampleVal);
      };

        $scope.$watch('sampleVal', function (newVal) {
            console.log('sampleVal', newVal);
            $scope.sampleVal = newVal;
        });

      $scope.addEntry = function() {
        $scope.examination.push(
          $scope.newEntry
        );
      };

      $scope.dropzoneConfig = {
        parallelUploads: 3,
        maxFileSize: 30
      };
      
      var visit = {
        interview: [],
        examination: {
          visualAcuity: {
            leftEye: {
              sph: "",
              cyl: "",
              ax: ""
            },
            rightEye: {
              sph: "",
              cyl: "",
              ax: ""
            },
            pd: "",
            vd: ""
          }
        },
        operation: [],
        diagnosis: [],
        documents: []
      }
      
      $scope.formLayout = {
        visualAcuity: {
          id: 'visualAcuityForm',
          leftLabel: 'Oko lewe',
          rightLabel: 'Oko prawe',
          definition: [
            {
              name: 'sph',
              label: 'SPH'
            },
            {
              name: 'cyl',
              label: 'CYL'
            },
            {
              name: 'ax',
              label: 'AX'
            }
          ],
          common: [
            {
              name: 'pd',
              label: 'PD'
            },
            {
              name: 'vd',
              label: 'VD'
            }
          ]
        }
      }
      
      var visualAcuity =  [];
      var refraction = [];
      var glasses = [];
      
      var posteriorSegment = [
        {
          name: "Opis ogólny",
          rightEye: {
            desc: "W normie"
          },
          leftEye: {
            desc: "W normie"
          },
        },
        {
          name: "Ciało szkliste",
          rightEye: {
            desc: "W normie"
          },
          leftEye: {
            desc: "W normie"
          }
        }
      ];
      
      var tonometry = {
        rightEye: ["30", "21", "22"],
        leftEye: ["12", "15", "17"]
      };
      
      var eyelids = [
        {
          name: "Powieki",
          rightEye: {
            desc: "W normie"
          },
          leftEye: {
            desc: "W normie"
          },
        },
        {
          name: "Rzęsy",
          rightEye: {
            desc: "W normie"
          },
          leftEye: {
            desc: "W normie"
          },
        },
        {
          name: "Spojówki",
          rightEye: {
            desc: "W normie"
          },
          leftEye: {
            desc: "W normie"
          }
        },
        {
          name: "Aparat łzowy",
          rightEye: {
            desc: "W normie"
          },
          leftEye: {
            desc: "W normie"
          }
        },
        {
          name: "Gruczoł",
          rightEye: {
            desc: "W normie"
          },
          leftEye: {
            desc: "W normie"
          }
        },
        {
          name: "Drogi",
          rightEye: {
            desc: "W normie"
          },
          leftEye: {
            desc: "W normie"
          }
        }
      ];
      
      
      var anteriorSegment = [
        {
          name: "",
          rightEye: {
            desc: "W normie"
          },
          leftEye: {
            desc: "W normie"
          },
        },
        {
          name: "",
          rightEye: {
            desc: "W normie"
          },
          leftEye: {
            desc: "W normie"
          },
        }
      ];
      
      var lens = [
        {
          name: "",
          rightEye: {
            desc: "W normie"
          },
          leftEye: {
            desc: "W normie"
          },
        },
        {
          name: "",
          rightEye: {
            desc: "W normie"
          },
          leftEye: {
            desc: "W normie"
          },
        }
      ];
      
      var fundus = [
        {
          name: "",
          rightEye: {
            desc: "W normie"
          },
          leftEye: {
            desc: "W normie"
          },
        },
        {
          name: "",
          rightEye: {
            desc: "W normie"
          },
          leftEye: {
            desc: "W normie"
          }
        }
      ];

      var others = [];
      
      
      var examCategories = {
        visualAcuity: [],
        refraction: [],
        glasses: [],
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
       
      var examination = {
        ctime: new Date(),
        mtime: new Date(),
        visitTime: new Date(),
        visualAcuity: visualAcuity,
        refraction: refraction,
        glasses: glasses,
        posteriorSegment: posteriorSegment,
        tonometry: tonometry,
        eyelids: eyelids,
        anteriorSegment: anteriorSegment,
        lens: lens,
        fundus: fundus,
        others: others
      };
      
      function init() {
        angular.copy(examination, $scope.examination);
      };
        
        
      init();
    
      
      
    }
    
  ]);
