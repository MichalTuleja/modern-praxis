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
  'VisitOphtalmologyCtrl', ['$scope', '$location', 'DataStoreService',
    function($scope, $location, dataStoreSvc) {
      
      var icd9list = dataStoreSvc.getIcd9Codes();
      var icd10list = dataStoreSvc.getIcd10Codes();
      
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
      
      $scope.examination = [];
      $scope.examCategories = {};
      $scope.visit = {
        procedures: {
          icd9: [],
          icd10: []
        }
      }
      
      $scope.newEntry = {
        twoEyeForm: {
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
      
      var visualAcuity = [
        {
          name: "vsc",
          label: "V s.c.",
          rightEye: "",
          leftEye: ""
        },
        {
          name: "sph",
          label: "SPH",
          rightEye: "",
          leftEye: ""
        },
        {
          name: "cyl",
          label: "CYL",
          rightEye: "",
          leftEye: ""
        },
        {
          name: "ax",
          label: "AX",
          rightEye: "",
          leftEye: ""
        },
        {
          name: "pd",
          label: "PD",
          value: ""
        },
        {
          name: "VD",
          label: "V s.c.",
          value: ""
        },
      ];
      
      var refraction = [
        {
          name: "vsc",
          label: "V s.c.",
          rightEye: "",
          leftEye: ""
        },
        {
          name: "sph",
          label: "SPH",
          rightEye: "",
          leftEye: ""
        },
        {
          name: "cyl",
          label: "CYL",
          rightEye: "",
          leftEye: ""
        },
        {
          name: "ax",
          label: "AX",
          rightEye: "",
          leftEye: ""
        },
        {
          name: "prism",
          label: "Pryzma",
          rightEye: "",
          leftEye: ""
        },
        {
          name: "base",
          label: "Baza",
          rightEye: "",
          leftEye: ""
        },
        {
          name: "vcor",
          label: "V cor",
          rightEye: "",
          leftEye: ""
        },
        {
          name: "pd",
          label: "PD",
          value: ""
        }
      ];
      
      var glasses = [
        {
          name: "sph",
          label: "SPH",
          rightEye: "",
          leftEye: ""
        },
        {
          name: "cyl",
          label: "CYL",
          rightEye: "",
          leftEye: ""
        },
        {
          name: "ax",
          label: "AX",
          rightEye: "",
          leftEye: ""
        },
        {
          name: "prism",
          label: "Pryzma",
          rightEye: "",
          leftEye: ""
        },
        {
          name: "base",
          label: "Baza",
          rightEye: "",
          leftEye: ""
        },
        {
          name: "pd",
          label: "PD",
          value: ""
        }
      ];
      
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
      
      var tonometry = [
        {
          name: "",
          rightEye: {
            desc: "12"
          },
          leftEye: {
            desc: "19"
          },
        },
        {
          name: "",
          rightEye: {
            desc: "23"
          },
          leftEye: {
            desc: "17"
          },
        },
      ];
      
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
        visualAcuity: {
          standard: visualAcuity,
          woAcc: visualAcuity
        },
        refraction: {
          far: refraction,
          near: refraction
        },
        glasses: {
          far: glasses,
          near: glasses
        },
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
        $scope.examCategories = examCategories;
      };
        
        
      init();
    
      
      
    }
    
  ]);
