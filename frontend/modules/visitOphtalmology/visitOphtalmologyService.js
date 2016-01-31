/*global angular*/
var visitOphtalmologyModule = angular.module('modernPraxis.visitOphtalmology', []);
//var visitOpthalmology = angular.module('modernPraxis.visitOpthalmology');

visitOphtalmologyModule.service('visitOphtalmologyService', ['DataStoreService', function(dataStore) {
  
    this.newVisit = function() {
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
          rightEye: "12",
          leftEye: "19"
        },
        {
          name: "",
          rightEye: "23",
          leftEye: "17"
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
      
      var examination = {
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
      
      var procedures = {
        icd9: [],
        icd10: []
      }
      
      var visitTemplate = {
        id: dataStore.guid(),
        firstTime: true,
        ctime: new Date(),
        mtime: new Date(),
        visitTime: new Date(),
        interview: "",
        examination: examination,
        operation: [],
        diagnosis: [],
        documents: [],
        procedures: procedures
      };
      
      return angular.copy(visitTemplate);
    };


}]);