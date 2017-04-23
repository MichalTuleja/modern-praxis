/*global angular*/

var core = angular.module('modernPraxis.core');

core.service('DataStoreService', ['$http', '$timeout', function($http, $timeout) {

  this.getPatientById = function(id, cb) {
    $http.get('/api/v1/patient/1').success(function(data) {
      cb(data);
    }).catch(function (err) {
      console.log(err);
    });
  };
  
  this.getAllPatients = function(cb) {
    $http.get('/api/v1/patients').success(function(data) {
      cb(data);
    }).catch(function (err) {
      console.log(err);
    });
  };
  
  this.getPatientListByName = function(name, cb) {
    function searchFunction(doc) {
      var testExpr = new RegExp(name, 'i');
      if (testExpr.test(doc.lastName)) {
        emit(doc.name);
      }
    }
    cb();
  };
  
  this.newVisit = function(patientId, cb) {
    
  };
  
  this.savePatient = function(id, data, cb) {
    cb()
  };
  
  this.getIcd9Codes = function() {
    return [
        {code: "01384", short: "Cns TB NEC-cult dx", desc: "Other specified tuberculosis of central nervous system, tubercle bacilli not found (in sputum) by microscopy, but found by bacterial culture"},
        {code: "80316", short: "Cl skull fx NEC-coma NOS", desc: "Other closed skull fracture with cerebral laceration and contusion, with loss of consciousness of unspecified duration"},
      ];
  };
  
  this.getIcd10Codes = function() {
    return [
        {code: "A18.5", desc: "Tuberculosis of eye"},
        {code: "A18.8", desc: "Tuberculosis of other specified organs"}
      ];
  };

  function init() {
  }
  
  init();
}]);